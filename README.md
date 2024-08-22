---

# PREP CLONE

PREP CLONE is a full-stack application that serves as a clone of the PREP platform. It consists of a frontend built with NextJS and a backend powered by Node.js and Express.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed on your machine.
- A code editor, such as **Visual Studio Code**.
- **Git** for version control.

## Getting Started

### Cloning the Repository

To get started with the project, clone the repository:

```bash
git clone https://github.com/jackjavi/prep-clone.git
cd prep-clone
```

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Copy the environment variables from the `.env.example` file to a new `.env` file:

   ```bash
   cp .env.example .env
   ```

4. **Replace the placeholder values in the `.env` file** with your specific environment details such as database connection strings, API keys, etc.

5. **Start the backend server:**

   ```bash
   npm run start
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Copy the environment variables from the `.env.example` file to a new `.env` file:

   ```bash
   cp .env.example .env
   ```

4. **Replace the placeholder values in the `.env` file** with your specific environment details.

5. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

## Running the Application

After setting up both the frontend and backend, the application will be running at:

```
http://localhost:3000
```

You can visit this URL in your web browser to interact with the application.

## Environment Variables

The `.env` files in both the backend and frontend directories store the environment variables required for the application to run. Make sure to replace the placeholder values in these files with your actual environment-specific configurations.

Ensure that all necessary variables are set correctly for the application to work as expected.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
