# TreasuryPro

A modern treasury management solution for businesses to manage cash, investments, and risk all in one place.

## Project Structure

This project consists of two main parts:
- Frontend: React application with Vite, TypeScript, and Tailwind CSS
- Backend: Node.js/Express server for handling Plaid API integration

## Setup

### Frontend

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Start the development server:
   ```
   npm run dev
   ```

### Backend

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PLAID_CLIENT_ID=your_plaid_client_id
   PLAID_SECRET=your_plaid_secret
   PLAID_ENV=sandbox
   PORT=5001
   ```

4. Start the server:
   ```
   npm start
   ```

   Or for development with auto-restart:
   ```
   npm run dev
   ```

## Running the Application

### Option 1: Run Frontend and Backend Separately

1. Start the backend server first:
   ```
   cd server && npm run dev
   ```

2. In a separate terminal, start the frontend:
   ```
   npm run dev
   ```

### Option 2: Run Both with a Single Command

You can run both the frontend and backend with a single command:
```
npm run dev:all
```

This uses concurrently to run both servers simultaneously.

3. Access the application at http://localhost:5173