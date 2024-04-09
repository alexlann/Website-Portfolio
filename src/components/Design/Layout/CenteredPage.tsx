import { ReactElement } from "react";

export default function CenteredPage({ mobileClassName, children } : { mobileClassName?: string, children?: ReactElement }) {
  return (
    <div className={`w-full ${mobileClassName} h-full flex items-center justify-center`}>
        <div className="w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-3/5">
          { children }
        </div>
    </div>
  )
}
