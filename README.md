# Fin Tracker

A modern, responsive expense tracking web application built with plain HTML, CSS, and JavaScript.

## Overview

`Fin Tracker` helps users monitor personal finances through a clean dashboard that displays:
- Total balance
- Total income
- Total expenses
- Transaction history
- Expense analytics by category

It also provides a dark/light theme toggle and the ability to export financial data as a PDF report.

## Key Features

- Add income and expense transactions with title, amount, type, and category
- Persist transactions in browser `localStorage` so data remains after page refreshes
- Automatically calculate and display:
  - Current balance
  - Total income
  - Total expense
- Delete transactions from history
- View expense breakdown by category with an interactive Chart.js bar chart
- Toggle between dark mode and light mode
- Export a printable PDF summary using jsPDF

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [Chart.js](https://www.chartjs.org/) for data visualizations
- [jsPDF](https://github.com/parallax/jsPDF) for PDF export
- [Font Awesome](https://fontawesome.com/) for icons

## Project Structure

- `index.html` — main application layout and structure
- `style.css` — responsive styling, theme support, and UI polish
- `script.js` — application logic, localStorage handling, chart updates, theme toggle, and PDF export

## Getting Started

### Prerequisites

No build tools or package managers are required. A modern browser is enough.

### Run the App

1. Open the project folder.
2. Open `index.html` in your browser.
3. Start adding transactions.

## Usage

1. Enter a transaction title.
2. Enter the amount.
3. Choose whether it is `Income` or `Expense`.
4. Select a category.
5. Click `Add Transaction`.

The dashboard updates automatically and the transaction appears in the history panel.

### Delete a transaction

- Click the `Delete` button next to any item in the transaction history.

### Export a PDF report

- Click `Export PDF Report` to generate a downloadable summary of all transactions and totals.

### Toggle theme

- Use the theme button in the top-right corner to switch between dark and light mode.

## Customization

To extend the app or customize it:
- Add new categories in `index.html`
- Modify the styling in `style.css`
- Add additional statistics or charts in `script.js`

## Notes

- Transactions are stored locally in your browser via `localStorage`.
- If the browser data is cleared, the stored transactions will be reset.

## Future Improvements

Potential enhancements include:
- Add edit transaction support
- Add date selection and sorting
- Add monthly or yearly reporting
- Add authentication for multi-user support
- Store data in a backend database or cloud service

## License

This project is open source and free to use.
