import React, { useCallback, useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { supabase } from '../lib/supabase';
import { plaidApi } from '../lib/plaid';
import { Link2, Loader2 } from 'lucide-react';

interface PlaidLinkProps {
  onSuccess: () => void;
  onExit?: () => void;
}

export default function PlaidLink({ onSuccess, onExit }: PlaidLinkProps) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createLinkToken = async () => {
      try {
        setLoading(true);
        const { data: customerData } = await supabase
          .from('customer_users')
          .select('customer_id')
          .limit(1);

        if (!customerData?.[0]?.customer_id) {
          throw new Error('No customer ID found');
        }

        const response = await plaidApi.createLinkToken(customerData[0].customer_id);
        setToken(response.link_token);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize Plaid');
      } finally {
        setLoading(false);
      }
    };

    createLinkToken();
  }, []);

  const onPlaidSuccess = useCallback(async (publicToken: string, metadata: any) => {
    try {
      setLoading(true);
      
      // Exchange public token for access token
      const exchangeResponse = await plaidApi.exchangePublicToken(publicToken);

      const { data: customerData } = await supabase
        .from('customer_users')
        .select('customer_id')
        .limit(1);

      if (!customerData?.[0]?.customer_id) {
        throw new Error('No customer ID found');
      }

      // Store Plaid item
      const { data: plaidItem } = await supabase
        .from('plaid_items')
        .insert({
          customer_id: customerData[0].customer_id,
          plaid_item_id: exchangeResponse.item_id,
          plaid_access_token: exchangeResponse.access_token,
          plaid_institution_id: metadata.institution.id,
          institution_name: metadata.institution.name,
        })
        .select()
        .single();

      // Get account details
      const accountsResponse = await plaidApi.getAccounts(exchangeResponse.access_token);

      // Create bank accounts and link them to Plaid accounts
      for (const account of accountsResponse.accounts) {
        const { data: bankAccount } = await supabase
          .from('bank_accounts')
          .insert({
            customer_id: customerData[0].customer_id,
            name: account.name,
            bank_name: metadata.institution.name,
            account_number: account.mask,
            routing_number: '', // Will be populated via Auth endpoint
            account_type: account.subtype || 'checking',
            is_plaid: true,
            plaid_account_id: account.account_id,
          })
          .select()
          .single();

        await supabase
          .from('plaid_accounts')
          .insert({
            plaid_item_id: plaidItem.id,
            bank_account_id: bankAccount.id,
            plaid_account_id: account.account_id,
            mask: account.mask,
            name: account.name,
            official_name: account.official_name,
            type: account.type,
            subtype: account.subtype,
          });
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to link account');
    } finally {
      setLoading(false);
    }
  }, [onSuccess]);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess: (public_token, metadata) => onPlaidSuccess(public_token, metadata),
    onExit: () => onExit?.(),
  });

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <button
      onClick={() => open()}
      disabled={!ready || loading}
      className="w-full flex items-center justify-center space-x-2 p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
    >
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Link2 className="h-5 w-5" />
      )}
      <span>{loading ? 'Connecting...' : 'Connect with Plaid'}</span>
    </button>
  );
}