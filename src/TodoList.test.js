import { fireEvent, render, screen, within } from "@testing-library/react";
import TodoList from "./TodoList";

describe("The Todo List Component", () => {
    test("renders a list of tasks", () => {
        render(<TodoList />);

        const unorderedListElement = screen.getByRole("list");
        const listItemElements =
            within(unorderedListElement).getAllByRole("listitem");

        expect(unorderedListElement).toBeInTheDocument();
        expect(listItemElements.length).toBe(2);
    });

    test("adds a new task to todo list", () => {
        render(<TodoList />);

        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        );
        const buttonElement = screen.getByRole("button", {
            name: /Add to list/i,
        });

        fireEvent.change(inputElement, { target: { value: "Take out trash" } });
        fireEvent.click(buttonElement);

        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements.length).toBe(3);
    });

    test("removes the first task from the todo list", () => {
        render(<TodoList />);

        const firstTaskElement = screen.getByText("Buy more coffee beans").parentElement;
        const deleteButtonElement = within(firstTaskElement).getByRole(
            "button",
            {
                name: /Delete/i,
            }
        );

        fireEvent.click(deleteButtonElement);

        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements.length).toBe(1);

        expect(
            screen.queryByText("Buy more coffee beans")
        ).not.toBeInTheDocument();
    });

    test("removes the second task from the todo list", () => {
        render(<TodoList />);

        const secondTaskElement = screen.getByText("Empty compost bin").parentElement;
        const deleteButtonElement = within(secondTaskElement).getByRole(
            "button",
            {
                name: /Delete/i,
            }
        );

        fireEvent.click(deleteButtonElement);

        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements.length).toBe(1);

        expect(
            screen.queryByText("Empty compost bin")
        ).not.toBeInTheDocument();
    });
    
});
