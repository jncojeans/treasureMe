// API functions for interacting with our backend Plaid service
const API_URL = 'http://localhost:5001';

export const plaidApi = {
  createLinkToken: async (customerId: string) => {
    const response = await fetch(`${API_URL}/api/create_link_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customer_id: customerId }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create link token');
    }
    
    return response.json();
  },
  
  exchangePublicToken: async (publicToken: string) => {
    const response = await fetch(`${API_URL}/api/exchange_public_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to exchange public token');
    }
    
    return response.json();
  },
  
  getAccounts: async (accessToken: string) => {
    const response = await fetch(`${API_URL}/api/get_accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token: accessToken }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to get accounts');
    }
    
    return response.json();
  },
};