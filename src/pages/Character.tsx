import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCharacter, useComics } from "../services/useApi";
import CharacterDetails from "../componentes/CharacterDetails";
import Comics from "../componentes/Comics";


const Character: React.FC = () => {
  const { id } = useParams();
  const {
    data: characterData,
    isLoading: isCharacterLoading,
    error: characterError
  } = useCharacter(id);

  const {
    data: comicsData,
    isLoading: isComicsLoading,
    error: comicsError,
  } = useComics(id);

  return (
    <>
      <div className="h-80  ">
        <CharacterDetails
          name={characterData?.name}
          id={characterData?.id}
          photoUrl={`${characterData?.thumbnail.path}.${characterData?.thumbnail.extension}`}
          description={characterData?.description}
        />
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
