import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { render } from "@testing-library/react";
import store from "./store";

describe("app render conrrectly", () => {
  it("renders learn react link", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/Software Engineer/i)).toBeInTheDocument();
  });
});
