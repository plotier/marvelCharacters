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
    <div className="p-4 w-full">
      <>
        <div className="p-12 ">
          <Search resultsLength={data?.length} />
        </div>
        {data?.length > 0 && (
          <ul className="grid grid-cols-[repeat(auto-fill,_minmax(188.571px,_1fr))] w-full gap-6 sm:px-12">
            {/* <ul className="flex flex-wrap justify-between w-full px-12  gap-6 "> */}
            {data.map((character: any) => (
              <div className="grid place-content-center">
                <CharacterCard
                  key={character.id}
                  character={character}
                />
               </div>

            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default Home;