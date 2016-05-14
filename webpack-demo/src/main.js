import * as React from "react";
import * as ReactDOM from "react-dom";
import {Point, add} from "./utils";
import {default as AppView} from "./views/app";

export function main(container) {
  var point1 = new Point({x: 3, y: 4});
  var point2 = new Point({x: 1, y: 2});
  var xDistance = add(point1.x, point2.x);

  console.log(`distance: ${xDistance}`);

  ReactDOM.render(<AppView/>, container);
}

// Entry points in Webpack need to be self-executing.
main(document.querySelector("#app"));
