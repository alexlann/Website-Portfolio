import { ReactElement } from "react";

export default function Card({ isProject = false, children } : { isProject?: boolean, children: ReactElement }) {
  return (
    <div className={`relative w-content h-full bg-light-green rounded ${isProject ? "ml-8" : "ml-3"}`}>
      <div className={`bg-white relative right-3 bottom-3 h-full border border-light-green border-2 rounded ${isProject && "group"}`}>
        <div className="py-2 px-3 h-full">
          { children }
        </div>
      </div>
    </div>
  )
}
