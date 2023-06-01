import { render, screen } from "@testing-library/react"
import TodoInputField from './TodoInputField'

describe("The Todo Input Field", () => {
    test("renders the input field and add button", () => {
        render(<TodoInputField />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i); 
        const buttonElement = screen.getByRole('button', { name: /Add to list/i }); 

        screen.debug()

        expect(inputElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
})
