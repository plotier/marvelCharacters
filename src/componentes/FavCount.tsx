import React from 'react'
import Icon from './Icon'
import { useStateContext } from "../context/MarvelContext";


const FavCount = () => {
    const { state } = useStateContext();
    const favoritesLength = state.favorites.length
    return (
        <div className="flex items-center justify-evenly w-16 px-2 py-1 h-[37.68px]">
            <Icon name="redHeart" className="h-6 w-[22px]" />
            <p className="text-white">{favoritesLength}</p>
        </div>
    )
}

export default FavCount
