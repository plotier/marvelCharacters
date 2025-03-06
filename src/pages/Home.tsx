import React, { useEffect } from "react";
import { useCharacters } from "../services/useApi";
import CharacterCard from "../componentes/CharacterCard";
import { useStateContext } from "../context/MarvelContext";
import Search from "../componentes/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom"; 


const Home: React.FC = () => {
  const { state, dispatch } = useStateContext();
  const debouncedSearch = useDebounce(state.searchValue, 500);
  const { data, isLoading, error } = useCharacters(debouncedSearch);
  const navigate = useNavigate();  

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: isLoading });
  }, [isLoading, dispatch]);

  const handleCharacterClick = (id: string) => {
    navigate(`/character/${id}`);  // Navega a la ruta de detalles del personaje
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4 w-full">
      <>
        <div className="p-12 ">
          <Search />
        </div>
        {data?.length > 0 && (
          <ul className="flex flex-wrap justify-between w-full px-12  gap-4">
            {data.map((character: any) => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name.toUpperCase()}
                photoUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                onClick={() => handleCharacterClick(character.id)} 
              />
            ))}
          </ul>)}
      </>
    </div>
  );
};

export default Home;