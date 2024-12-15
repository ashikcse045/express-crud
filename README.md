# Express App Setup and Running Guide

This project is a Node.js Express application. Below are the steps for setting up and running the app in both development and production environments.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js 20.17.0** (or higher)
- **npm** (comes with Node.js)

To verify if Node.js and npm are installed, run the following commands:

```bash
node -v  # Should show v20.17.0 or higher
npm -v   # Should show npm version
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application in development mode:

   ```bash
   npm run dev
   ```

   This will start the app using **nodemon**, allowing for automatic restarts when changes are detected in the source code.

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

   (Replace `3000` with the port number specified in your application if different.)

## Commands

- **Install Dependencies**: Run `npm install` to install the required dependencies.
- **Start Development Server**: Run `npm run dev` to start the application in development mode.

## Author

- **Author**: Ashik Sarker
