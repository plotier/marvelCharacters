import React from "react";
import Icon from './Icon';
import { useStateContext } from "../context/MarvelContext";
interface FavoriteIconProps {
    id: string;
    className: string;
}
const FavButton = ({ id, className }: FavoriteIconProps) => {
    const { state, dispatch } = useStateContext();
    const isFavorite = state.favorites.includes(id);

    const toggleFavorite = () => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: id });
    };

    return (
        <div onClick={toggleFavorite} aria-label="Toggle Favorite" className={className}>
            <Icon name={isFavorite ? "redHeart" : "whiteHeart"} className="h-8 w-8" />
            {/* <Icon name={'whiteHeart'} className="h-[12px] w-[10px]" /> */}
        </div>
    );
};

export default FavButton;