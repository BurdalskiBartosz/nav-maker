import Button from "@/components/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button>Test</Button>);

    expect(screen.getByRole("button", { name: /test/i })).toBeInTheDocument();
  });

  it("should trigger callback on click", async () => {
    const mockFn = jest.fn();

    render(<Button handleClick={mockFn}>Test</Button>);
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /test/i }));

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should return link when href is provided", async () => {
    render(<Button href="/">Test</Button>);

    expect(screen.getByRole("link", { name: /test/i })).toBeInTheDocument();
  });
});
