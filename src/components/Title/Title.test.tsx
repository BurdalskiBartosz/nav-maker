import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("should render correctly", () => {
    render(<Title>Title</Title>);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
