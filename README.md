
# Full-Stack Application

This is a full-stack application built with a backend using Express and Prisma, and a frontend using React with Vite. The application is structured into two separate parts: backend and frontend.

## Backend

The backend is built with Node.js and Express, using Prisma ORM to interact with the database.

### Installation

1. Clone the repository.
	```bash
    git clone https://github.com/pparnfaa/Helpdesk_Ticket_Management
    cd your-repo
2. Navigate to the `backend` folder.
	```bash
    cd backend
3. Run the following command to install dependencies:
    ```bash
    npm install
4. Set up environment variables , Create a `.env` file in the `backend` directory and configure the necessary values:
	 ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/postgres"
6. Set up the database using Prisma (ensure you have a PostgreSQL database running):
    ```bash
    npx prisma migrate dev
7.  Start the backend server:
	```bash
    npm start
The backend will be available at `http://localhost:4000`.

### Dependencies

-   `@prisma/client`: Prisma ORM for interacting with the database.
-   `cors`: Middleware for enabling Cross-Origin Resource Sharing.
-   `express`: Web framework for Node.js.
-   `pg`: PostgreSQL client for Node.js.
-   `prisma`: Prisma CLI.

## Frontend

The frontend is built with React and Vite. It uses TailwindCSS for styling and Zustand for state management.

### Installation

1.  Navigate to the `frontend` folder.
	 ```bash
    cd frontend
2.  Install the dependencies:
	```bash
	npm install
3. Start the development server:
	```bash
    npm run dev
The frontend will be available at `http://localhost:3000`.
### Dependencies

-   `@tailwindcss/vite`: Vite plugin for TailwindCSS.
-   `@tanstack/react-query`: Data fetching and state management library for React.
-   `axios`: HTTP client for making API requests.
-   `react`: React library for building user interfaces.
-   `react-dom`: React package for DOM-specific rendering.
-   `react-hook-form`: Library for managing forms in React.
-   `react-router-dom`: Routing library for React.
-   `zustand`: State management library for React.

### DevDependencies

-   `vite`: Next-generation, fast build tool.
-   `eslint`: Linter for ensuring code quality.
-   `eslint-plugin-react`: ESLint plugin for React.
-   `tailwindcss`: Utility-first CSS framework.
-   `@vitejs/plugin-react`: Vite plugin for React.

## Proxy

The frontend is configured to proxy API requests to the backend running at `http://localhost:4000`.
