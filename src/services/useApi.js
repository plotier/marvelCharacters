import { useQuery } from "@tanstack/react-query";
import { getCharacters, getCharacterById } from "../services/api";


export const useCharacters = (name) => {
  return useQuery({
    queryKey: ["characters", name],
    queryFn: () => getCharacters(name),
    staleTime: 1000 * 60 * 60 * 24
  });
};


export const useCharacter = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });
};
