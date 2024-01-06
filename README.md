# This password meets the following criteria:

- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character (in this case, !)

# Course Review

## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

### Step 1: Create .env file

In the root directory of your project, create a file named `.env` and add the following code:

```env
NODE_ENV: deveopment
PORT=5000
DATABASE_URL=your_database_url_here
JWT_ACCESS_SECRET= Make an ACCESS_SECRET
JWT_REFRESH_SECRET= Make a REFRESH_SECRET

JWT_ACCESS_SECRET_IN= example (7d)
JWT_REFRESH_SECRET_IN= example (7d)
```

when the server in production NODE_ENV: deveopment change is NODE_ENV: production

### Step 2: Install Dependencies

Run the following command to install project dependencies:

```env
npm install
```

### Step 3: Run the Project

Production Mode

```env
npm run start:prod
```

Development Mode

```env
npm run start:dev
```

Build the project:

```env
npm run build
```

Run linting:

```env
npm run lint
```

Fix linting issues:

```env
npm run lint:fix
```

Run Prettier:

```env
npm run prettier
```

Fix Prettier formatting:

```env
npm run prettier:fix
```

Postman API Documentation

```env
https://documenter.getpostman.com/view/29299206/2s9YkuZeAR
```
