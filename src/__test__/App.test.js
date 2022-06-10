import { fireEvent, render, screen } from '@testing-library/react';
import App from "../App"

describe("header tests", ()=>{ //groups all similar tests togther.
  //makes sure the app.js has this (screen.getByText(/calculator/i);)  h1 title
  test('text of header', () => {
    //file to be tested in
    render(<App />);
    //query methods
    const headerElement = screen.getByText(/calculator/i);
    //assesertions 
    expect(headerElement).toBeInTheDocument();
  });

  it("find element of header", ()=>{
    render(<App/>);
    const headerElement =screen.getByRole("heading",{name:"calculator"});
    expect(headerElement).toBeInTheDocument();
  });

  it("have a h1", ()=>{
    render(<App/>);
    const headingElement = screen.getByText(/calculator/i);
    expect(headingElement).toContainHTML("h1")
  })
})

describe("display calculations", ()=>{
  it("display 4 when 2+2", ()=>{
    render(<App/>);
    const twoButton = screen.getByText("2");
    const plusButton = screen.getByText("+");
    const equalsButton = screen.getByText("=");

    fireEvent.click(twoButton);
    fireEvent.click(plusButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    const display = screen.getByTestId("display",)
    expect(display).toHaveTextContent("4")
  })

  //should display 3 when 6/2
  it("display when the user enters the calulation", ()=>{
    render(<App/>);
    const sixButton = screen.getByText("6");
    const divideButton = screen.getByText("/");
    const twoButton = screen.getByText("2");
    const equalsButton = screen.getByText("=");

    fireEvent.click(sixButton);
    fireEvent.click(divideButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    const display = screen.getByTestId("display",)
    expect(display).toHaveTextContent("3")
  })

  //should display 6 when 3*2
  it("display 6 when 3*2", ()=>{
    render(<App/>);
    const threeButton = screen.getByText("3");
    const timesButton = screen.getByText("*");
    const twoButton = screen.getByText("2");
    const equalsButton = screen.getByText("=");

    fireEvent.click(threeButton);
    fireEvent.click(timesButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    const display = screen.getByTestId("display",)
    expect(display).toHaveTextContent("6")
  })

  //

})