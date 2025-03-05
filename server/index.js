const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Plaid client
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});
const plaidClient = new PlaidApi(configuration);

// Routes
app.post('/api/create_link_token', async (req, res) => {
  try {
    const { customer_id } = req.body;
    
    if (!customer_id) {
      return res.status(400).json({ error: 'Customer ID is required' });
    }

    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: customer_id },
      client_name: 'TreasuryPro',
      products: ['auth'],
      country_codes: ['US'],
      language: 'en',
    });

    return res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error('Error creating link token:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to create link token' 
    });
  }
});

app.post('/api/exchange_public_token', async (req, res) => {
  try {
    const { public_token } = req.body;
    
    if (!public_token) {
      return res.status(400).json({ error: 'Public token is required' });
    }

    const response = await plaidClient.itemPublicTokenExchange({
      public_token,
    });

    return res.json({
      access_token: response.data.access_token,
      item_id: response.data.item_id,
    });
  } catch (error) {
    console.error('Error exchanging public token:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to exchange public token' 
    });
  }
});

app.post('/api/get_accounts', async (req, res) => {
  try {
    const { access_token } = req.body;
    
    if (!access_token) {
      return res.status(400).json({ error: 'Access token is required' });
    }

    const response = await plaidClient.accountsGet({
      access_token,
    });

    return res.json({
      accounts: response.data.accounts,
      item: response.data.item,
    });
  } catch (error) {
    console.error('Error getting accounts:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to get accounts' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 