import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetail: React.FC = () => {
  const { id } = useParams(); 

  return (
    <div>
      <h1>Detalles del Personaje: {id}</h1>
 
    </div>
  );
};

export default CharacterDetail;
