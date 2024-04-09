export default function Text({ children } : { children: string | any }) {
  return (
    <p className="leading-loose mb-4">{ children }</p>
  )
}
