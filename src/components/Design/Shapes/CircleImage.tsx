import { ColorOptions } from "../../../types";

export default function CircleImage({positionClass = "left-0 top-0", color = ColorOptions.lightGreen} : { diameter?: number, positionClass?: any, color?: ColorOptions}) {
  return (
    <span className={`-z-40 block h-32vw w-32vw ${positionClass} bg-${color} rounded-full`}></span>
  )
}
