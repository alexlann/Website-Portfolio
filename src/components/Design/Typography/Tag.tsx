export default function Tag({ tag } : { tag: string }) {
  return (
    <p className="relative bg-green text-white border-t-2 border-x-2 border-light-green pr-2.5 py-1.5 pl-3 -ml-5 rounded-tl-md before:w-full before:h-0.5 before:bg-light-green before:block before:z-10 before:absolute before:bottom-0 before:right-0 after:h-full after:w-0.5 after:bg-light-green after:block after:z-10 after:absolute after:-bottom-0.5 after:-left-0.5">
      <span className="block absolute w-5 h-2.5 -bottom-2 -left-0.5 bg-dark-green border border-2 rounded-l-md border-light-green content-[''] z-10 "></span>
      { tag }
    </p>
  )
}
