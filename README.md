# Dashboard

## Overview

This project is a comprehensive data visualization dashboard that provides insightful visual representations of various datasets. The dashboard leverages several cutting-edge technologies and libraries to create interactive and visually appealing charts. 

## Features

- **ACV Range Chart:** Visualizes the range of Annual Contract Value (ACV) across different categories.
- **Customer Type Chart:** Displays the distribution of customers across various types using both bar and doughnut charts.
- **Team Performance Chart:** Illustrates team performance metrics.
- **Account Industry Area Chart:** Showcases the trends in different account industries over fiscal quarters.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Recharts:** A composable charting library built on React components.
- **D3.js:** A JavaScript library for producing dynamic, interactive data visualizations in web browsers.
- **Material-UI:** A popular React UI framework that provides a set of pre-designed components.
- **JavaScript:** The programming language used to build and interact with web components.
- **JSON:** A lightweight data-interchange format used to store and transmit data between a server and a web application.
- **Node.js & npm:** Node.js for running the project locally, and npm for managing project dependencies.

## Project Structure

- **src/components:** Contains all the React components used in the project.
  - `ACVRangeChart.js`
  - `CustomerTypeChart.js`
  - `CustomerTypeDoughnutChart.js`
  - `TeamChart.js`
  - `AccountIndustryAreaChart.js`

- **src/data:** Contains the JSON files with the datasets used for visualization.
  - `acvRange.json`
  - `customerType.json`
  - `teamData.json`
  - `accountIndustry.json`

- **src/utils:** Contains utility functions for data preparation and processing.
  - `prepareACVRangeData.js`
  - `prepareCustomerTypeData.js`
  - `prepareTeamData.js`
  - `prepareAccountIndustryData.js`

- **Code Explanation:** A folder explaining each part of the code in detail to help understand the logic and implementation.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **npm**: npm is the package manager for Node.js. It is installed with Node.js by default.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mayank-Tiwari01/Dashboard.git
   cd Dashboard
2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

The application will be running at `http://localhost:3000`.

## Usage

- Navigate through the different charts using the headings provided on the dashboard.
- Interact with the charts to get more detailed insights.

## Contributing

We welcome contributions! If you have any ideas to improve the project, feel free to fork the repository and submit a pull request.

1. **Fork the repository**
2. **Create a new branch:**
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```
5. **Submit a pull request**
## Contact

If you have any questions, feel free to open an issue or contact us directly.
