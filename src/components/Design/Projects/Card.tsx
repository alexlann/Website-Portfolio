import { ReactElement } from "react";

export default function Card({ children } : { children: ReactElement }) {
  return (
    <div>
        { children }
    </div>
  )
}
