import { render, screen } from "@testing-library/react";
import EmptyStateInfoBox from "./EmptyStateInfoBox";

describe("EmptyStateInfoBox", () => {
  it("should render correctly", () => {
    render(
      <EmptyStateInfoBox
        title="Title"
        subtitle="Empty state"
        buttonLabel="Button Label"
      />,
    );

    expect(
      screen.getByRole("button", { name: /button label/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/empty state/i)).toBeInTheDocument();
  });

  it("should render correctly without subtitle prop", () => {
    render(<EmptyStateInfoBox title="Only title" buttonLabel="Button Label" />);

    expect(
      screen.getByRole("button", { name: /button label/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/only title/i)).toBeInTheDocument();
  });
});
