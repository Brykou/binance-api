# Binance API on regular endpoints

Display Binance tickers, order books, and tarde history using regular endpoints.

## Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[Redux](https://redux.js.org/) is used for global state management. [Express](https://expressjs.com/fr/) is used to create a proxy server.

## How to run ?

Binance API CORS don't allow to request endpoints from the browser. This is why there is a proxy server which broadcast calls to Binance API.

    npm install
    npm run server
    npm run start

Access to http://localhost:3000 to use the app.
