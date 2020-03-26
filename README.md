# Opening Times Application

This repository contains the solution for the Wolt frontend application challenge.

## Tools used

The application is built using Javascript. The application uses React and was bootstrapped using Create React App.

The full list of tools used by the application can be found below:

- [React](https://reactjs.org) - tooling for frontend development
- [React Feather](https://github.com/feathericons/react-feather#readme) - Icon pack

## Getting up and running

- Clone the repository
- Inside the cloned directory, run the following commands:
  - `npm install` or `yarn` - To install all the project's dependencies.
  - Run `yarn start` or `npm start` to start the frontend application

## Project directory

The project directory houses the server application and the frontend application.

- The frontend application - `./src`

The reusable components that make up the frontend application can be found in the `src/components` directory. Each component serves a single purpose:

- `./src/components/week` - renders the list of days
- `./src/components/table` - renders each of the week

## Styling

Styling was done using utility classes provided by [TailwindCSS](https://tailwindcss.com/) and some custom styles.