import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const ACTIONS = {
  SET_CHARACTERS: "SET_CHARACTERS",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_LOADING: "SET_LOADING",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE"
};

const initialState = {
  characters: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], 
  loading: false,
  searchValue: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CHARACTERS:
      return { ...state, characters: action.payload };

    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.some(
        (char) => char.id === action.payload.id
      );

      const updatedFavorites = isFavorite
        ? state.favorites.filter((char) => char.id !== action.payload.id)
        : [...state.favorites, action.payload];


      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { ...state, favorites: updatedFavorites };

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

  const location = useLocation(); 

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_SEARCH_VALUE, payload: initialState.searchValue });
  }, [location.pathname]); 

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
