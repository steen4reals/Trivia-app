import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/...l/i);
  expect(linkElement).toBeInTheDocument();
});
