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

  return (
    <div className="p-4 w-full">
      <>
        <h1 className="text-2xl font-bold px-12 pb-2">FAVORITES</h1>

        <div className="p-12 pt-0 ">
          <Search resultsLength={filteredFavorites.length} />
        </div>

        {filteredFavorites.length > 0 ? (
          <ul className="flex flex-wrap justify-between w-full px-12 gap-4">
            {filteredFavorites.map((character: any) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </ul>
        ) : (
          <p className="flex flex-wrap w-full px-12 gap-4">No favorites match your search.</p>
        )}
      </>
    </div>
  );
};

export default Favorites;
