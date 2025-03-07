import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCharacter, useComics } from "../services/useApi";
import CharacterDetails from "../componentes/CharacterDetails";
import Comics from "../componentes/Comics";
import { useStateContext } from "../context/MarvelContext";


const Character: React.FC = () => {
  const { id } = useParams();
  const { dispatch } = useStateContext();

  const {
    data: characterData,
    isLoading: isCharacterLoading
  } = useCharacter(id);

  const {
    data: comicsData,
    isLoading: isComicsLoading,
  } = useComics(id);

  const characterIsLoading = isComicsLoading || isCharacterLoading

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: characterIsLoading });
  }, [characterIsLoading, dispatch]);

  if (characterIsLoading) {
    return null;
  }

  return (
    <>
      <div className="h-80  ">
        {characterData &&
          <CharacterDetails
            characterData={characterData}
          />}
      </div>
      <div className="flex justify-center">

        {comicsData &&
          <Comics
            data={comicsData}
          />}
      </div>
    </>
  );
}

export default Character;
