import { ReactElement } from "react";

export default function CenteredPage({ children } : { children?: ReactElement }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-3/5">
          { children }
        </div>
    </div>
  )
}
