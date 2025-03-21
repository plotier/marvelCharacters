import React from "react";
import Icon from './Icon';
import { useStateContext } from "../context/MarvelContext";
import { Character, FavoriteIconProps } from "../types/types";

const FavButton = ({ characterData, className }: FavoriteIconProps) => {
    const { state, dispatch } = useStateContext();
    const isFavorite = state.favorites.some((fav: Character) => fav.id === characterData.id);
    const toggleFavorite = () => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: characterData });
    };
    return (
        <div
            onClick={toggleFavorite}
            aria-label="Toggle Favorite"
            className={className}
            role="button"
            tabIndex={0}
        >
            <Icon name={isFavorite ? "redHeart" : "whiteHeart"} className="h-8 w-8 min-h-6 min-w-6" />
        </div>
    );

};

export default FavButton;
