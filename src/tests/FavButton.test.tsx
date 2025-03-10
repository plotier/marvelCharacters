import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FavButton from "../componentes/FavButton";
import { useStateContext } from "../context/MarvelContext";

jest.mock("../context/MarvelContext");

const mockUseStateContext = useStateContext as jest.MockedFunction<typeof useStateContext>;

const mockDispatch = jest.fn();
const mockCharacter = {
  id: 1,
  name: "Spider-Man",
  description: "Testing with Spider-Man",
  thumbnail: {
    path: "https://example.com/spiderman",
    extension: "jpg",
  },
};

describe("FavButton Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with whiteHeart icon when not a favorite", () => {
    mockUseStateContext.mockReturnValue({ state: { favorites: [] }, dispatch: mockDispatch });
    render(<FavButton characterData={mockCharacter} className="test-class" />);
    
    const button = screen.getByRole("button", { name: /toggle favorite/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText("whiteHeart")).toBeInTheDocument();
  });

  it("should render with redHeart icon when character is a favorite", () => {
    mockUseStateContext.mockReturnValue({ state: { favorites: [mockCharacter] }, dispatch: mockDispatch });
    render(<FavButton characterData={mockCharacter} className="test-class" />);
    
    expect(screen.getByAltText("redHeart")).toBeInTheDocument();
  });

  it("should toggle favorite status on click", () => {
    mockUseStateContext.mockReturnValue({ state: { favorites: [] }, dispatch: mockDispatch });
    render(<FavButton characterData={mockCharacter} className="test-class" />);
    
    const button = screen.getByRole("button", { name: /toggle favorite/i });
    fireEvent.click(button);
    
    expect(mockDispatch).toHaveBeenCalledWith({ type: "TOGGLE_FAVORITE", payload: mockCharacter });
  });
});
