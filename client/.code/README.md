# PAT Portal Setup Guide (From Scratch)

This guide provides step-by-step instructions to set up and run the **Placement Automation Tool (PAT)** portal on your local machine.

---

## 📋 Prerequisites

Ensure you have the following installed:
- **Node.js** (v20.x or higher)
- **npm** (v10.x or higher)

### 🐘 Installing PostgreSQL (Ubuntu/Debian)
If you get the error `Unit postgresql.service could not be found`, run these commands:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
# Start and enable the service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```
*Verify with: `sudo systemctl status postgresql`*

---

## 🗄️ Step 1: Database Setup

1. Open your PostgreSQL terminal (psql):
   ```bash
   sudo -u postgres psql
   ```
2. Create the database:
   ```sql
   CREATE DATABASE login_db;
   ```
3. To **switch/use** the database in PostgreSQL, use the `\c` (connect) command:
   ```psql
   \c login_db
   ```
   *(Note: The SQL `USE` command is for MySQL; PostgreSQL uses `\c`)*

4. Ensure you have your PostgreSQL **username** and **password** ready.

---

## ⚙️ Step 2: Backend Configuration

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` folder (or update the existing one):
   ```env
   DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/login_db?schema=public"
   JWT_SECRET="your_secure_random_key_here"
   PORT=5000
   ```
   *Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your actual Postgres credentials.*

4. Initialize the database schema with Prisma:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

---

## 🎨 Step 3: Frontend Configuration

1. Open a new terminal window and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```

---

## 🚀 Step 4: Running the Portal

To run the full application, you need to start both the backend and the frontend.

### 1. Start the Backend Server
In the `server` directory:
```bash
npm start
```
*The server will run at `http://localhost:5000`.*

### 2. Start the Frontend Application
In the `client` directory:
```bash
npm run dev
```
*The portal will typically run at `http://localhost:3002` (check the terminal for the exact port).*

---

## 🛑 Step 5: Stopping the Application

To stop the portal's services correctly, follow these steps:

### 1. Stop Frontend and Backend
Go to each terminal window where the `npm run dev` or `npm start` commands are running and press:
**`Ctrl + C`** (Control key + C)

This safely terminates the Node.js and Vite processes.

### 2. Stop PostgreSQL Database (Optional)
On Ubuntu, the database service runs in the background. If you want to stop it completely when you're done:
```bash
sudo systemctl stop postgresql
```

---

## ✅ Final Check
- Open your browser to the URL provided by the frontend (e.g., `http://localhost:3002`).
- You should see the **PAT Identity Management** login page with the corporate background.
- Go to **Create Account** to register your first user.

---

## 📄 Documentation
For a detailed technical breakdown of the system architecture, refer to:
[technical_overview.md](./technical_overview.md)
