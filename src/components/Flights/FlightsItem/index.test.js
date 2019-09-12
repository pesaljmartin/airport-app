import React from "react";
import FlightsItem from "./index";
import renderer from "react-test-renderer";

test("FlightsItem comoponent snapshot", () => {
  const component = renderer.create(<FlightsItem flight={{}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
