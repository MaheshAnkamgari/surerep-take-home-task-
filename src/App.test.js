import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component ", () => {
  const renderComp = () => render(<App />);

  it("renders all default task header names", () => {
    const { getByText } = renderComp();
    expect(getByText("New Tasks")).toBeInTheDocument();
    expect(getByText("In Progress")).toBeInTheDocument();
    expect(getByText("Review")).toBeInTheDocument();
    expect(getByText("Done")).toBeInTheDocument();
  });

  it("check weather new status container", () => {
    const { getByTestId } = renderComp();
    expect(getByTestId("new-container")).toBeInTheDocument();
  });

  it("check weather in progress status container", () => {
    const { getByTestId } = renderComp();
    expect(getByTestId("inprogress-container")).toBeInTheDocument();
  });

  it("check weather review status container", () => {
    const { getByTestId } = renderComp();
    expect(getByTestId("review-container")).toBeInTheDocument();
  });

  it("check weather done status container", () => {
    const { getByTestId } = renderComp();
    expect(getByTestId("done-container")).toBeInTheDocument();
  });
  
});
