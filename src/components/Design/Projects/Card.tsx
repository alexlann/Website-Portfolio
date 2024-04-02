import { ReactElement } from "react";

export default function Card({ link, children } : { link?: string, children: ReactElement }) {
  return (
    <div className="relative w-full h-full bg-light-green rounded">
      {/* TODO: met button proberen om link optioneel te maken? */}
      {/* <a href={ link || "" } className={ link ? "pointer-events-none" : "" }> */}
        <div className="bg-white relative right-3 bottom-3 h-full border border-light-green border-2 rounded group">
          <div className="py-2 px-3 h-full">
            { children }
          </div>
        </div>
      {/* </a> */}
    </div>
  )
}
