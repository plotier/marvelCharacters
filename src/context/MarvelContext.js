import React, { createContext, useContext, useReducer } from "react";

const ACTIONS = {
  SET_CHARACTERS: "SET_CHARACTERS",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_LOADING: "SET_LOADING",
  SET_SEARCH_VALUE:"SET_SEARCH_VALUE"
};

const initialState = {
  characters: [],
  favorites: [],
  loading: false,
   searchValue: ""
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
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload }; 
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