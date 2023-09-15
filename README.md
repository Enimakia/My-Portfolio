# My-Portfolio
my personal portfolio web app
# Portfolio Website

This repository contains the code for a portfolio website built using Sanity.io as the backend and React.js as the frontend. The website serves as a showcase for projects, skills, and experiences.

## Getting Started

To get the project set up and running locally on your machine, please follow the instructions below.

### Prerequisites

Ensure that you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org)

### Installation

1. Clone the repository to your local machine:
2. 2. Navigate to the project directory:
```
cd portfolio-website
Install the dependencies:
Copy
npm install
Sanity.io Backend Setup
To set up the Sanity.io backend, follow these steps:

Create a new project on Sanity.io and obtain your project API token.

Rename the .env.example file to .env.

Open the .env file and update the SANITY_TOKEN value with your project API token.

Importing Data
To import the Sanity.io schema and sample data, follow these steps:

Run the following command to import the schema:


sanity dataset import ./data/schema.tar.gz
Run the following command to import the sample data:

sanity dataset import ./data/sample-data.tar.gz
Running the Project
To start the development server and run the project locally, use the following command:

npm start
The portfolio website will be accessible at http://localhost:3000 in your browser.
