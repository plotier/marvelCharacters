import { useQuery } from "@tanstack/react-query";
import { getCharacters, getCharacterById, getComicsById } from "../services/api";


export const useCharacters = (name) => {
  return useQuery({
    queryKey: ["characters", name],
    queryFn: () => getCharacters({ name }), // 🔹 Pasamos `name` correctamente
    staleTime: 1000 * 60 * 60 * 24, // 24h de caché
    enabled: name !== undefined, // 🔹 Evita ejecutar si `name` es undefined
  });
};



export const useCharacter = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });
};
export const useComics = (id) => {
  return useQuery({
    queryKey: ["getComicsById", id],
    queryFn: () => getComicsById(id),
    enabled: !!id,
  });
};
