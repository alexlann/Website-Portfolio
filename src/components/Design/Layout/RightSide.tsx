import { ReactElement } from "react";
import CircleImage from "../Shapes/CircleImage";
import MovingCircle from "../Shapes/MovingCircle";

export default function RightSide({ children } : { children?: ReactElement }) {
  return (
    <div className="w-full h-full">
        <MovingCircle positionClass="top-36 right-1/3" />
        <div className="h-full w-full flex justify-center items-center">
          <CircleImage />
        </div>
        { children }
    </div>
  )
}
