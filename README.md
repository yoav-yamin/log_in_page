
# React Login Page

This repository contains a React application designed as a login page. The application is structured with a main `App` component and additional styling. Below are instructions on how to run the application locally, along with an overview of the project's structure.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Additional Information](#additional-information)

## Getting Started

To get a copy of this project up and running on your local machine, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher recommended)
- npm or yarn (package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yoav-yamin/log_in_page.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd log_in_page
   ```

3. **Install dependencies:**

   ```bash
   npm install
   npm install validator
   ```

   or

   ```bash
   yarn install
   yarn install validator
   ```

## Project Structure

The project structure is as follows:

```
log_in_page/
├── node_modules/           # Node.js modules (dependencies)
├── public/                 # Public assets
├── src/                    # Source files
│   ├── assets/             # Static assets like images
│   │   └── react.svg       # React logo
│   ├── Components/         # React components
│   │   └── App/            # Main App component
│   │       ├── App.jsx     # Main App component file
│   │       └── App.css     # Styles for the App component
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
└── package.json            # Project metadata and dependencies
```

### Important Files

- **`src/main.jsx`**: The entry point of the React application.
- **`src/Components/App/App.jsx`**: The main application component.
- **`src/Components/App/App.css`**: Styles specific to the `App` component.
- **`src/index.css`**: Global styles for the application.

## Running the Application

Once you have installed all the dependencies, you can run the application locally with the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Additional Information

- This project was bootstrapped with [Vite](https://vitejs.dev/), which is an alternative to Create React App. It offers a faster and leaner development experience.
- The main focus of this project is the implementation of a login page interface using React components.
