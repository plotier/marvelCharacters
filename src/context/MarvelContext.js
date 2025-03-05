import React, { createContext, useContext, useReducer } from 'react';


const ACTIONS = {
  SET_CHARACTERS: 'SET_CHARACTERS',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};


const initialState = {
  characters: [],
  favorites: [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CHARACTERS:
      return { ...state, characters: action.payload };
    case ACTIONS.TOGGLE_FAVORITE:
      const newFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((id) => id !== action.payload)
        : [...state.favorites, action.payload];
      return { ...state, favorites: newFavorites };
    default:
      return state;
  }
};


const StateContext = createContext();


export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);
