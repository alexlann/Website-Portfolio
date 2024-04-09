import { ColorOptions } from "../../../types";

export default function CircleImage({imageSrc, positionClass = "left-0 top-0", color = ColorOptions.lightGreen} : { imageSrc: string, diameter?: number, positionClass?: string, color?: ColorOptions}) {
  return (
    <div className={`[height:32vw] [width:32vw] ${positionClass} relative`}>
      <div className={`-z-40 [height:32vw] [width:32vw] bg-${color} rounded-full`}></div>
      <img className="absolute -top-32" src={imageSrc} alt="hero" />
    </div>
  )
}
