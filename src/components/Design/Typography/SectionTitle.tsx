export default function SectionTitle({ underline = true, className, children } : { underline?: boolean, className?: string, children: string }) {
  return (
    <h2 className={`text-2xl sm:text-3xl xl:text-4xl text-dark-gray w-fit font-title font-bold mb-12 ${underline && "partial-underline-visible"} ${className} `}>
        { children }
    </h2>
  )
}
