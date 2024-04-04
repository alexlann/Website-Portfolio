import { ColorOptions } from "../../../types";
import Circle from "./Circle";

export default function MovingCircle({ positionClass } : { positionClass?: string }) {
  return (
    <Circle diameter={24} color={ColorOptions.green} positionClass={`z-0 ${positionClass}`} />
  )
}
