import { ColorOptions } from "../../../types";

export default function Circle({ diameter = 20, positionClass = "left-0 top-0", color = ColorOptions.lightGreen} : { diameter?: number, positionClass?: string, color?: ColorOptions}) {
  return (
    <>
      {/* TODO: move in circular motion on hover */}
      <div className={`-z-10 block bg-${color} h-${diameter} w-${diameter} absolute ${positionClass} rounded-full`}></div>
    </>
  )
}
