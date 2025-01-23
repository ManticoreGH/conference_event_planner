// store.js
import { configureStore } from '@reduxjs/toolkit';
// You should import the venueSlice this way the store can use it.
import venueReducer from './venueSlice';
// The store is the object that brings actions and reducers together.
// The store has the following responsibilities:
// Holds application state;
// Allows access to state via getState();
// Allows state to be updated via dispatch(action);
// It makes the link between the actions and the reducers.
// It managed all the state of the application.
// It eases the access to all the states of the application. Without duplicating code.
export default configureStore({
  // The reducer is a function that determines how the state changes in response to actions sent to the store.
  // It specifies how the state is transformed in response to certain actions.
  // Below, the venueReducer is passed to the store to handle the state changes.
  // it's a list of reducers that will be combined into the root reducer.
  reducer: {
    venue: venueReducer,
  },
});
