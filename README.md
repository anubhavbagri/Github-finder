# Github Finder App

Using the Github Rest API to be able to search users and get their profile data and display it nicely. Profile data includes image, bio, other information like location, stats, followers, following, etc. Fetching the users' repositories as well. There's an about and 404 not found page too. 

The application is deployed to [vercel](https://vercel.com/) and the hosted [domain](https://githubfinder.tech) is purchased from [dottech](https://get.tech).

- To deal with any third party API
- Instead of just using the `useState()` Hook within our context; Using reducers (pure functions that are used to manipulate parts of your state) along with a hook called `useReducer()`
- For the frontend, using Tailwind for my framework along with [Daisy UI](https://daisyui.com/)

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install dependencies

```
npm install
```

## How to run?

To run app in development mode ([http://localhost:3000](http://localhost:3000))

```
npm start
```

To build app for production

```
npm run build
```


