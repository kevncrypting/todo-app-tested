import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);

    expect(screen.getByText('Buy more coffee beans')).toBeInTheDocument()
    expect(screen.getByText('Empty compost bin')).toBeInTheDocument()
});
