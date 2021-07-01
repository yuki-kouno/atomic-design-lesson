import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  it("Should render all the elements correctly", () => {
    render(<App />);
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
  });
});
