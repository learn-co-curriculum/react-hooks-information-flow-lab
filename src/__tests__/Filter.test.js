import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  render(<Filter />);
  expect(screen.queryByRole("combobox")).toBeInTheDocument();
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);

  fireEvent.change(screen.queryByRole("combobox"), {
    target: { value: "Dairy" },
  });
  expect(onCategoryChange).toHaveBeenCalled();
});
