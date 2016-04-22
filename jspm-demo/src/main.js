import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Geom from "./utils/geom";
import * as Math from "./utils/math";
import {default as AppView} from "./views/app";

export function main(container) {
  var point1 = new Geom.Point({x: 3, y: 4});
  var point2 = new Geom.Point({x: 1, y: 2});
  var xDistance = Math.add(point1.x, point2.x);
  
  console.log(`distance: ${xDistance}`);
  
  ReactDOM.render(<AppView/>, container);
}
