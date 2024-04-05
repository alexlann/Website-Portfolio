import { ReactElement } from "react";

export default function LeftSide({ children } : { children?: ReactElement }) {
  return (
    <div className="w-full h-full flex items-center">
        <div className="w-full">
          { children }
        </div>
    </div>
  )
}
