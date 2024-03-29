import { ColorOptions } from "../../../types";

export default function Circle({ diameter = 24, positionClass = "left-0 top-0", color = ColorOptions.lightGreen} : { diameter?: number, positionClass?: any, color?: ColorOptions}) {
  return (
    <>
      {/* <div className="h-24 w-24"></div> */}
      <div className={`block bg-${color} h-${diameter} w-${diameter} absolute ${positionClass} rounded-full`}></div>
    </>
  )
}
