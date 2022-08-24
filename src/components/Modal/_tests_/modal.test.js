import React from "react";
import ReactDOM from "react-dom";
import Modal from "..";
import { render } from "@testing-library/react";

it("Renders in empty state", () => {
    const el = document.createElement("div");
    ReactDOM.render(<Modal></Modal>, el);
});

it("Renders with default values", () => {
    const meta = { id: "Test", modelYear: "2011", meta: { passengers: 2 } };
    const { queryByTestId } = render(<Modal vehicalDetails={meta}></Modal>);

    expect(queryByTestId("name").textContent).toBe("Test");
    expect(queryByTestId("passengers").textContent).toBe("2");
    expect(queryByTestId("modelYear").textContent).toBe("2011");
});
