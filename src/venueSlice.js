// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";
// In the context of React and Redux, a state refers to an object that holds data or information about the component or application.
// It determines how the component or application behaves and renders.
// The state is mutable, meaning it can change over time
// Here the state are initialized with the createSlice function from the Redux Toolkit.
export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  // The reducers are functions that control how the state changes in response to actions sent to the store.
  // They specify how the state is transformed in response to certain actions.
  // The reducer is a pure function that takes the previous state and an action as arguments and returns a new state.
  // The reducer must be pure. A pure function is a function where the return value is determined only by its input values,
  // without observable side effects.
  // payload is the data that is being sent along with the action.
  // In this case, the payload is the index of the item in the state array.
  // action is an object that has a type and a payload.
  // The type is a string that describes the action that is being performed.
    reducers: {
   
    incrementQuantity: (state, action) => {
      // getting the index from the payload
      const { payload: index } = action;
      // Accessing the state array to check if the item exists and if the quantity is less than 3
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        // Incrementing the quantity of the item
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
