import React from "react";
import Flights from "./index";
import renderer from "react-test-renderer";

test("Flights comoponent snapshot", () => {
  const component = renderer.create(<Flights />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
