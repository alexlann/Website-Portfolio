import { ColorOptions } from "../../../types";

export default function CircleImage({positionClass = "left-0 top-0", color = ColorOptions.lightGreen} : { diameter?: number, positionClass?: string, color?: ColorOptions}) {
  return (
    <span className={`-z-40 block [height:32vw] [width:32vw] ${positionClass} bg-${color} rounded-full`}></span>
  )
}
