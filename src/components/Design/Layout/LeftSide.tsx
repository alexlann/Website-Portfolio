import { ReactElement } from "react";

export default function LeftSide({ children } : { children?: ReactElement }) {
  return (
    <div className="w-full h-screen md:h-full flex items-center">
        <div className="w-full">
          { children }
        </div>
    </div>
  )
}
