# MyReads App

The main goal of the app is to keep track of books which you have read, want to read or currently reading. User can easily move them between the categories as soon as the read status has changed.

Search feature ('+' icon on the bottom of the main page) is available as well where you can find books to read and them to your current books list. For more information about Search please refer to __Important__ section below.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## How to start

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Dependacies

This app has some dependancies to make the UI and UX better. The list of dependancies of the app:

* React
* React-dom
* React-router-dom
* Sort-by

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Also special characters are not accepted in the Search field, letter, spaces and digits are allowed only.
