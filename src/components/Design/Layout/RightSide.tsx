import { ReactElement } from "react";
import CircleImage from "../Shapes/CircleImage";
import MovingCircle from "../Shapes/MovingCircle";

export default function RightSide({ imageSrc, children } : { imageSrc: string, children?: ReactElement }) {
  return (
    <div className="w-full h-full hidden md:block">
        <MovingCircle positionClass="md:[right:30%] lg:[right:33%] [top:20%] xl:[right:37%]" />
        <div className="h-full w-full flex justify-center items-center">
          <CircleImage {...{imageSrc}} />
        </div>
        { children }
    </div>
  )
}
