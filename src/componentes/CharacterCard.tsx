import React, { useState } from "react";
import Icon from "./Icon";
import { useStateContext } from "../context/MarvelContext";
import { useNavigate } from "react-router-dom";
import { Character } from "../types/types";

function CharacterCard({ character }: { character: Character }) {
    const [isHovered, setIsHovered] = useState(false);
    const { state, dispatch } = useStateContext();

    const isFavorite = state.favorites.some((fav: Character) => fav.id === character.id);

    const navigate = useNavigate();

    const handleCharacterClick = (id: string) => {
        navigate(`/character/${id}`);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toggleFavorite = (e: React.MouseEvent) => {

        e.stopPropagation();
        dispatch({ type: "TOGGLE_FAVORITE", payload: character });
    };

    return (
        <li
            className="w-full max-w-[188.571px] sm:w-[188.571px] h-[215.971px] sm:h-[245.971px] overflow-hidden bg-black flex flex-col relative group clip-bottom-right 
               animate-fadeIn "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCharacterClick(character.id.toString())}
        >
            <div className="flex-grow overflow-hidden border-l-pink-50 relative">
                <img
                    src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                    alt={character.name}
                    className="w-full h-full "
                />
            </div>
            <div className="bg-marvel-red h-[5.38px] bottom-0 left-0 w-full transform origin-top transition-all duration-[300ms] ease-in-out group-hover:scale-y-[20] p-0 m-0"></div>
            <div className="h-14 pb-6 p-4 flex items-center justify-between relative ">
                <p className="text-white">{character.name}</p>
                <div onClick={toggleFavorite} className="cursor-pointer">
                    <Icon
                        name={isFavorite ? (isHovered ? "whiteHeartFull" : "redHeart") : "whiteHeart"}
                        className="h-[12px] w-[10px]"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[13px] border-r-white border-t-[13px] border-t-transparent"></div>
        </li>
    );
}

export default CharacterCard;
