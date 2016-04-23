import * as React from "react";
import * as Geom from "../utils/geom";

export default class View extends React.Component {
  render() {
    var point1 = new Geom.Point({x: 1, y: 2});
    var point2 = point1.scale(2);
    return (
      <div>
        <h1>Hello World</h1>
        <div>{point2.toString()}</div>
      </div>
    );
  }
}