import * as Immutable from "immutable";
import * as Math from "./math";

export class Point extends Immutable.Record({x: 0, y: 0}) {
  add(other) {
    return new Point({x: Math.add(this.x, other.x), y: Math.add(this.y, other.y)});
  }

  scale(scaleX, scaleY = undefined) {
    scaleY = scaleY == null ? scaleX : scaleY;
    return new Point({x: Math.multiply(this.x, scaleX), y: Math.multiply(this.y, scaleY)});
  }
  
  toString() {
    return `{x: ${this.x}, y: ${this.y}}`;
  }
}
