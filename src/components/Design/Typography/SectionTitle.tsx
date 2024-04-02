export default function SectionTitle({ children } : { children: string }) {
  return (
    <h2 className="text-4xl text-dark-gray w-fit font-title font-bold mb-12 partial-underline-visible">
        { children }
    </h2>
  )
}
