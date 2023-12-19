# Yogaflex - Yoga Class Enrollment App

Welcome to Yogaflex - the Yoga Class Enrollment App! This application allows users to enroll in yoga classes by filling out a form with their details.

## Features

- **Form Input Fields:** Collects essential information like name, age, email, selected batch, payment information, and the month of enrollment.
- **Validation:** Validates age input to ensure it falls within the acceptable range of 18 to 65 years. Along with that, we are also checking if the amount paid is 500rs or not!
- **Submission:** Sends enrollment data securely to a server for processing and displays success or failure alerts accordingly.

## Technologies Used

- **React:** Built using React for a dynamic and interactive user interface.
- **useState Hook:** Manages state within functional components for handling form data.
- **Fetch API:** Utilizes the Fetch API to send POST requests to a backend server.
- **CSS:** Styled using CSS for a clean and user-friendly interface.

## Usage

To use the app locally:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the server directory (`server/`) in your terminal.
3. Install Node.js dependencies: `npm install`
4. Start the Node.js server: `npm start`
5. Open a new terminal window, navigate to the root directory, and run:
   - Install React app dependencies: `npm install`
   - Start the React development server: `npm start`
6. Access the app in your browser at `http://localhost:3000`

Alternatively, you can access the hosted version of the app [here](https://yogaflex.netlify.app/).

## Screenshots

### Yogaflex App
![Yogaflex App](https://github.com/nisheetkaran/YogaFlex/assets/77787531/8003c551-236a-4345-877a-2d12f864df41)

### ER Diagram
![ER Diagram](https://github.com/nisheetkaran/YogaFlex/assets/77787531/00fb4867-bf40-401c-ad78-7f10206679e1)

## Node.js Server Setup

To run the Backend  Node.js server locally:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to `cd backend/`
3. Install Node.js dependencies: `npm install`
4. Start the Node.js server: `npm run dev`

This will start the server at a specific port (e.g., `http://localhost:3001`) to handle form submissions and processing.
