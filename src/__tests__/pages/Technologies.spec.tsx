import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Technologies from "../../pages/Technologies";

// Testando a página de tecnologias
describe("Testing Technologies Page", () => {
  it("should be able to add new technologies", () => {
    render(<Technologies />);

    const input = screen.getByTestId("input-add-tech");
    const form = screen.getByTestId("form-add-tech");

    userEvent.type(input, "React Native");
    fireEvent.submit(form);

    expect(screen.getByTestId("React Native")).toBeTruthy();
  });

  it("should be able to list three techs", () => {
    render(<Technologies />);

    const input = screen.getByTestId("input-add-tech");
    const form = screen.getByTestId("form-add-tech");

    userEvent.type(input, "React Native");
    fireEvent.submit(form);
    userEvent.type(input, "Flutter");
    fireEvent.submit(form);

    const techList = screen.getByTestId("ul-techs");

    expect(techList.children.length).toBe(3);
  });
});

it("should be able to delete one tech", () => {
  render(<Technologies />);

  const input = screen.getByTestId("input-add-tech");
  const form = screen.getByTestId("form-add-tech");

  userEvent.type(input, "React Native");
  fireEvent.submit(form);

  expect(screen.getByTestId("React Native")).toBeTruthy();

  const itemButton = screen.getByTestId("React Native-btn-delete");
  userEvent.click(itemButton);

  expect(screen.queryByTestId("React Native")).toBeNull();
});

it("button delete should be disabled only for React technology", () => {
  render(<Technologies />);

  const button = screen.getByTestId("React-btn-delete");

  expect(button).toBeDisabled();
});
