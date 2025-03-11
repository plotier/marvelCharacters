import { useQuery } from "@tanstack/react-query";
import { getCharacters, getCharacterById, getComicsById } from "../services/api";


export const useCharacters = (name) => {
  return useQuery({
    queryKey: ["characters", name],
    queryFn: () => getCharacters({ name }),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: name !== undefined
  });
};
export const useCharacter = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!id,
  });
};
export const useComics = (id) => {
  return useQuery({
    queryKey: ["getComicsById", id],
    queryFn: () => getComicsById(id),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!id,
  });
};
