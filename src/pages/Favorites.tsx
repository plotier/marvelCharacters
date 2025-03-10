import React from "react";
import CharacterCard from "../componentes/CharacterCard";
import { useStateContext } from "../context/MarvelContext";
import Search from "../componentes/Search";

const Favorites: React.FC = () => {
  const { state } = useStateContext();
  const { favorites, searchValue } = state;
  const filteredFavorites = favorites.filter((character: any) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase())
  );


  const isFavoritesEmpty = favorites.length === 0;

  const isSearchEmpty = filteredFavorites.length === 0 && !isFavoritesEmpty;

  return (
    <>
      <h1 className="text-2xl md:py-8 font-bold px-12">FAVORITES</h1>
      <div className="px-5 md:px-12 w-full animate-slideDown">
        <Search resultsLength={filteredFavorites.length} />
        {isFavoritesEmpty ? (
          <p className="flex flex-wrap w-full px-12 gap-4">Your favorite list is empty.</p>
        ) : isSearchEmpty ? (
          <p className="flex flex-wrap w-full px-12 gap-4">No favorites match your search.</p>
        ) : (
          <ul className="grid grid-cols-2 sm:flex sm:flex-wrap justify-start gap-2 xs:gap-4">
            {filteredFavorites.map((character: any) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Favorites;
