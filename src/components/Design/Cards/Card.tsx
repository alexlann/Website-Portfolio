import { ReactElement } from "react";

export default function Card({ isGroup = false, children } : { isGroup?: boolean, children: ReactElement }) {
  return (
    <div className="relative w-content h-full bg-light-green rounded">
      <div className={`bg-white relative right-3 bottom-3 h-full border border-light-green border-2 rounded ${isGroup && "group"}`}>
        <div className="py-2 px-3 h-full">
          { children }
        </div>
      </div>
    </div>
  )
}
