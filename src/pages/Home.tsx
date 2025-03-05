import React from "react";
import { useCharacters } from "../services/useApi";
import CharacterCard from "../componentes/CharacterCard";

const Home: React.FC = () => {
  const { data, isLoading, error } = useCharacters("");

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //TODO PONER EL RESULTADO DE LOS CHARACTERS EN EL ESTADO GLOBAL


  return (
    <div>
      {data.length > 0 ? (
        <ul className="flex flex-wrap gap-4 p-4">
          {data.map((character: any) => (
            <CharacterCard
              key={character.id}
              name={character.name.toUpperCase()}
              photoUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </ul>
      ) : (
        <div>No hay personajes disponibles.</div>
      )}
    </div>
  );
};

export default Home;