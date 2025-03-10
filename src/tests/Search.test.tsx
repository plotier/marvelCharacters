import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../componentes/Search";
import { useStateContext } from "../context/MarvelContext";

jest.mock("../context/MarvelContext");

const mockUseStateContext = useStateContext as jest.MockedFunction<typeof useStateContext>;
const mockDispatch = jest.fn();

describe("Search Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the input with the correct placeholder", () => {
    mockUseStateContext.mockReturnValue({ state: { searchValue: "" }, dispatch: mockDispatch });
    render(<Search resultsLength={0} />);
    
    const input = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    expect(input).toBeInTheDocument();
  });

  it("should display the correct number of results", () => {
    mockUseStateContext.mockReturnValue({ state: { searchValue: "" }, dispatch: mockDispatch });
    render(<Search resultsLength={5} />);
    
    expect(screen.getByText("5 RESULTS")).toBeInTheDocument();
  });

  it("should display '1 RESULT' when there is exactly one result", () => {
    mockUseStateContext.mockReturnValue({ state: { searchValue: "" }, dispatch: mockDispatch });
    render(<Search resultsLength={1} />);
    
    expect(screen.getByText("1 RESULT")).toBeInTheDocument();
  });

  it("should call dispatch when input value changes", () => {
    mockUseStateContext.mockReturnValue({ state: { searchValue: "" }, dispatch: mockDispatch });
    render(<Search resultsLength={0} />);
    
    const input = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    fireEvent.change(input, { target: { value: "Iron Man" } });
    
    expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_SEARCH_VALUE", payload: "Iron Man" });
  });
});
