import React, { useEffect } from "react";
import Icon from './Icon';
import { useStateContext } from "../context/MarvelContext";


interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface FavoriteIconProps {
    className: string;
    characterData: Character;
}

const FavButton = ({ characterData, className }: FavoriteIconProps) => {
    const { state, dispatch } = useStateContext();


    const isFavorite = state.favorites.some((fav: Character) => fav.id === characterData.id);

    useEffect(() => {
        console.log(state.favorites);
    }, [state.favorites]);

    const toggleFavorite = () => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: characterData });
    };

    return (
        <div onClick={toggleFavorite} aria-label="Toggle Favorite" className={className}>
            <Icon name={isFavorite ? "redHeart" : "whiteHeart"} className="h-8 w-8" />
        </div>
    );
};

export default FavButton;
