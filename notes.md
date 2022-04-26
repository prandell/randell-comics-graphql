# Notes

This document was used to capture things I learnt while creating this project

## Routing

- `BrowserRouter` component is the top level parent component in index.tsx which enables the router (there are other types of routers in react-router)
- `Routes` component is then the parent of all `Route` components which take the element/component to be rendered as a prop
- Nesting routes within routes allows you to persist a parent component while rendering different children (such as a navbar)
- Using the `*` symbol within a route indicates that there are wildcard subroutes
- `UseNavigation` hook allows us to route without explicitly using the `<Link>` Element

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

## Styled Components

- Allows us to use tsx files and define components that do the styling for our corresponding DOM elements.
- classNames are randomly generated so that they dont conflict with similar names in other components
- Very flexible and allows us to pass in props

## Tips and Tricks

- `Fragment` is a component offered by react to be a parent component that is essentially just an empty component. `Fragment` components don't even appear on the DOM. `<></>` is a shorthand version.
- Fonts can be added to your application from Google Fonts (or elsewhere) and imported to the `index.html` file. After this, they are accessible in CSS rules as a `font-family`
- Using images that are hosted somewhere is preferrable to adding images to your public folder (but hey what can you do)

## Firebase

- Hosting tool service by Google. Mainly gives us access to a database.
- We can easily integrate Google Authentication to enable us to make CRUD operations on Firebase
- `firebase` library has a lot of sub-libaries. `initiliazeApp` from `firebase/app` creates an app instance for you based on a configuration. It helps link this instance to the one we created in the firebase console.
- the Firebase console can be used to create authentication, database instances and more.
- Firebase has a function `onAuthStateChanged` which returns a listener that allows us to perform an action on any change to the authentication state.
- Firebase actually persists logins across refreshes automatically
- Firebases database service is Firestore
- Firebase also offers storage for static content like images. I had some trouble using the libraries to retrieve them, so I actually used the google cloud links and made them public.

## Netlify

- Free and extremely easy website hosting from github projects using the build command.
- Make sure for SPA's to include the `_redirects` file in the public folder

## Context

- Due to single direction data flow, passing data from one component to another without "Prop Drilling" is achieved through context - a central/external place we store important state attributes.
- `createContext` and `Provider` from React allows us to use a component to wrap the parts of our component tree that need to be able to access a particular piece of context
- context can even be used to alter SCSS variables (which allows for a theme toggle)

## Reducers

- Reducer is a similar way to handle global state (like context) except it uses globally unique ACTION methods that are more atomic in the particular state values that get updated.
- Example of a complex reducer

```
export const cartReducer: Reducer<CartState, CartActions> = (
  state: CartState,
  action: CartActions
): CartState => {
  const { type } = action
  const { cartItems, cartOpen } = state

  let newCartItems
  switch (type) {
    case CartActionTypes.ADD_CART_ITEM:
      newCartItems = incrementCartItem(cartItems, action.payload, true)
      break
    case CartActionTypes.REMOVE_CART_ITEM:
      newCartItems = incrementCartItem(cartItems, action.payload, false)
      break
    case CartActionTypes.CLEAR_PRODUCT:
      newCartItems = clearProduct(cartItems, action.payload)
      break
    case CartActionTypes.SET_CART_OPEN:
      return {
        ...state,
        cartOpen: !cartOpen
      }
    default:
      throw new Error(`Unhandled type (${type}) in userReducer`)
  }
  const { count, total } = getNewCartCountAndTotal(newCartItems)
  return {
    ...state,
    cartItems: newCartItems,
    cartCount: count,
    cartTotal: total
  }
}
```

- And its corresponding Context Provider

```const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const setCartOpen = (open: boolean) => {
    dispatch({ type: CartActionTypes.SET_CART_OPEN, payload: open })
  }
  const addItemToCart = (productToAdd: Product) => {
    dispatch({ type: CartActionTypes.ADD_CART_ITEM, payload: productToAdd })
  }
  const removeItemFromCart = (productToRemove: Product) => {
    dispatch({
      type: CartActionTypes.REMOVE_CART_ITEM,
      payload: productToRemove
    })
  }
  const removeProductFromCart = (productToClear: Product) => {
    dispatch({ type: CartActionTypes.CLEAR_PRODUCT, payload: productToClear })
  }
  return (
    <CartContext.Provider
      value={{
        ...state,
        setCartOpen,
        addItemToCart,
        removeItemFromCart,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
```

## Redux

- Unlike standard Context Providers, Redux does not allow you to isolate certain parts of your application in terms of different contexts. Every "Context" is global and accessible by all parts of your application.
- Redux has a global store that has a single dispatch that we must handle with our different reducers
- `@reduxjs/toolkit` is the most up to date library for using redux in react
- "slices" are essentially "slices" of the global state that hold their own reducers and actions
- Any component using `useSelector` will have its selector fire after ANY store update, but it's up to the component as to whether it re-renders
- `createSelector` from `selector` library allows us to use memoisation to avoid `useSelector` firing when it's input variable is unchanged. This is commonly used when we reduce over the result of an async function for different purposes which are in turn selected using a `useSelector` in components of your application

## Redux Persist

- Uses local storage to persist redux global state so that state values persist through refreshes.
- Wraps all reducers and store in a persistance layer
- You can specifically blacklist the reducers you wish to remain unpersisted (ie, users, as they conflict with firebases provided persistance)

## Redux DevTools

- Allows you to scroll through Redux events/actions that took place and see the effect they had on your application LIVE. Very cool

## Redux Saga

- Uses generator functions to handle asynchronous fetch calls.
- Relies on the callbacks/state of the generator function to determine status (for things like loading spinners)
- You can `yield` multiple times within a generator function, but the status will remain as `false` until they `return`
- `put` is like the saga version of dispatch
- Categories Saga looks like:

```
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
```

## GraphQL

- An intemediary between the server and client that has a defined query language that allows you to ask for exactly what you want rather than every field an API may provide
- GraphQL and Apollo should be used in place of Redux, not both.
- GraphPlaygrounds are a good way of seeing how a GraphQL Schema can be queried. [Course playground](https://crwn-clothing.com/)
- Sample query where a parameter of `{"id": "cjwuuj5bz000i0719rrtw5gqk"}` is defined. Corresponds to asking for a particular collection and getting its title, id, and item names. It then asks for all collections as a seperate return value inside the same query

```
query($id:ID!) {
  collection(id: $id) {
    id
    title
    items {
      name
    }
  }
  collections {
    id
    title
    items {
      name
    }
  }
}
```

## Apollo vs Redux

- Both aim to be a single source of truth for application state
- You can still utilise Context API in combination with global application state managers
- Backend must have setup GraphQL which is a bit of work
