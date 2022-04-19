# Notes

This document was used to capture things I learnt while creating this project

## Routing

- `BrowserRouter` component is the top level parent component in index.tsx which enables the router (there are other types of routers in react-router)
- `Routes` component is then the parent of all `Route` components which take the element/component to be rendered as a prop
- Nesting routes within routes allows you to persist a parent component while rendering different children (such as a navbar)

## SCSS

- Allows you to target classes that are direct childern of other classes by nesting the CSS definitions:
- Still applies to the whole application despite only importing it into one component
- Lots of logos and brand names can be generated with AI generators
- `box-sizing: border-box` means that padding doesn't increase the defined dimensions of a component

```
.categories-container {
  background-color: red;
  padding: 10px;
  .category-container {
    background-color: green;
    padding: 20px;
    .category-body-container {
      background-color: blue;
      padding: 30px;
    }
  }
}
```

## Tips and Tricks

- `Fragment` is a component offered by react to be a parent component that is essentially just an empty component. `Fragment` components don't even appear on the DOM.
- Fonts can be added to your application from Google Fonts (or elsewhere) and imported to the `index.html` file. After this, they are accessible in CSS rules as a `font-family`
- Using images that are hosted somewhere is preferrable to adding images to your public folder (but hey what can you do)

## Firebase

- Hosting tool service by Google. Mainly gives us access to a database.
- We can easily integrate Google Authentication to enable us to make CRUD operations on Firebase
- `firebase` library has a lot of sub-libaries. `initiliazeApp` from `firebase/app` creates an app instance for you based on a configuration. It helps link this instance to the one we created in the firebase console.
- the Firebase console can be used to create authentication, database instances and more.
- Firebase has a function `onAuthStateChanged` which returns a listener that allows us to perform an action on any change to the authentication state.
- Firebase actually persists logins across refreshes automatically

## Context

- Due to single direction data flow, passing data from one component to another without "Prop Drilling" is achieved through context - a central/external place we store important state attributes.
- `createContext` and `Provider` from React allows us to use a component to wrap the parts of our component tree that need to be able to access a particular piece of context
