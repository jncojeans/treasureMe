# TreasuryPro Backend Server

This is the backend server for the TreasuryPro application. It handles Plaid API integration and provides endpoints for the frontend to interact with Plaid.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   PLAID_CLIENT_ID=your_plaid_client_id
   PLAID_SECRET=your_plaid_secret
   PLAID_ENV=sandbox
   PORT=5001
   ```

3. Start the server:
   ```
   npm start
   ```

   Or for development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

- `POST /api/create_link_token`: Creates a Plaid Link token
- `POST /api/exchange_public_token`: Exchanges a public token for an access token
- `POST /api/get_accounts`: Gets account information using an access token 