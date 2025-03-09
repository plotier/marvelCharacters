import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from "../componentes/CharacterCard";
import { StateProvider } from "../context/MarvelContext";

const mockCharacter = {
    id: "1",
    name: "Spider-Man",
    description: "Testing with Spider-Man",
    thumbnail: {
        path: "https://marvel.com/spiderman",
        extension: "jpg",
    },
};

describe("CharacterCard Component", () => {
    test("It renders correctly with the name and the image.", () => {
        render(
            <MemoryRouter>
                <StateProvider >
                    <CharacterCard character={mockCharacter} />
                </StateProvider>
            </MemoryRouter>
        );


        expect(screen.getByText("Spider-Man")).toBeInTheDocument();

        expect(screen.getByRole("img", { name: /spider-man/i })).toHaveAttribute(
            "src",
            "https://marvel.com/spiderman.jpg"
        );
    });
});
