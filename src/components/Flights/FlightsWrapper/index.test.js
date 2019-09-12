import React from "react";
import FlightsWrapper from "./index";
import renderer from "react-test-renderer";

test("FlightsWrapper comoponent snapshot", () => {
  const component = renderer.create(<FlightsWrapper flights={[]} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
