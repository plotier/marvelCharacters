import React, { useEffect } from "react";
import { useCharacters } from "../services/useApi";
import CharacterCard from "../componentes/CharacterCard";
import { useStateContext } from "../context/MarvelContext";
import Search from "../componentes/Search";
import { useDebounce } from "../hooks/useDebounce";

const Home: React.FC = () => {
  const { state, dispatch } = useStateContext();
  const debouncedSearch = useDebounce(state.searchValue, 500);
  const { data, isLoading, error } = useCharacters(debouncedSearch);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: isLoading });
  }, [isLoading, dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-5 md:p-12 w-full ">
      <>

        <Search resultsLength={data?.length} />

        {data?.length > 0 && (
          <ul className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-2 ">
            {data.map((character: any) => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default Home;