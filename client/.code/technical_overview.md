# Technical Overview: PAT Identity Management System

This document provides a standard software development overview of the **Placement Automation Tool (PAT)** Identity Management microservice.

---

## 🏗️ System Architecture

The application follows a modern **Decoupled Architecture**, separating the frontend user interface from the backend business logic and data persistence layers.

### 🌐 Frontend (Client-Side)
*   **Technology**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vitejs.dev/) (v7) for ultra-fast development and optimized production builds.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) with custom Corporate UI V2 design system (Glassmorphism & High-Contrast).
*   **Routing**: [React Router](https://reactrouter.com/) (v7) for seamless Client-Side Routing (CSR).
*   **State Management**: React Context API for Global Authentication state.

### ⚙️ Backend (Server-Side)
*   **Runtime**: Node.js
*   **Framework**: [Express.js](https://expressjs.com/) (v5)
*   **ORM**: [Prisma](https://www.prisma.io/) (v7) - Next-generation Node.js and TypeScript ORM.
*   **API Protocol**: RESTful API design.

### 🗄️ Database
*   **Type**: Relational Database (RDBMS)
*   **Engine**: [PostgreSQL](https://www.postgresql.org/) (v16)
*   **Schema**: Centralized `User` model with secure unique field constraints.

---

## 🔐 Security & Identity Services

The system implements industry-standard security protocols to ensure data integrity and user privacy.

*   **Authentication**: [JSON Web Token (JWT)](https://jwt.io/) based stateless authentication.
*   **Password Hashing**: [BcryptJS](https://github.com/dcodeIO/bcrypt.js) using Salt rounds to store user credentials securely.
*   **CORS Management**: Secure Cross-Origin Resource Sharing (CORS) policies enabled for controlled API access.
*   **Environment Variables**: Sensitive data (Database URLs, JWT Secrets) is managed via `.env` files.

---

## 🛠️ Key Dependencies

| Component | Package | Purpose |
| :--- | :--- | :--- |
| **Backend** | `express` | Core web framework |
| **Backend** | `@prisma/client` | Type-safe database access |
| **Backend** | `jsonwebtoken` | Token-based security |
| **Backend** | `bcryptjs` | Secure credential hashing |
| **Frontend** | `react-router-dom` | SPA navigation |
| **Frontend** | `axios` | HTTP client for API communication |
| **Frontend** | `lucide-react` | Professional iconography |

---

## 🚀 Execution & Deployment

### Prerequisites
- Node.js (v20+)
- PostgreSQL Instance

### Step-by-Step Execution

#### 1. Server Setup
```bash
cd server
npm install    # Install dependencies
npx prisma generate  # Generate DB client
npm start     # Runs on http://localhost:5000
```

#### 2. Client Setup
```bash
cd client
npm install    # Install dependencies
npm run dev    # Runs on http://localhost:3002 (or 3001)
```

---

## 📝 Standards Summary
- **Style**: Standard Software Development (SSD)
- **Formatting**: GitHub Flavored Markdown
- **Focus**: Scalability, Security, and Premium User Experience (UX)
