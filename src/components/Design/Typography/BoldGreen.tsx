export default function BoldGreen({ children } : { children: string | any }) {
  return (
    <span className="font-bold text-green">{ children }</span>
  )
}
