import { render, screen } from "@testing-library/react";
import TitleBarWithButton from "./TitleBarWithButton";

describe("TitleBarWithButton", () => {
  it("should render correctly", () => {
    render(
      <TitleBarWithButton buttonLabel="Button label" href="/">
        Children
      </TitleBarWithButton>,
    );

    expect(
      screen.getByRole("link", { name: /button label/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  });
});
