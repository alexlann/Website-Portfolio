export default function Balloon({ children } : { children: string }) {
  return (
    <div className="hidden group-hover:block absolute z-10 -top-10 left-0 w-full">
    <div className="flex top-0 flex-col left:0 w-full items-center z-10">
      <div className={`hidden text-center group-hover:block whitespace-nowrap text-white bg-dark-gray rounded-sm text-md h-fit w-fit py-0.5 px-3 border border-light-gray`}>
        { children }
      </div>
      <div className={`hidden group-hover:block bg-dark-gray border-b border-r border-light-gray rotate-45 w-4 h-4 -mt-2`}></div>
    </div>
  </div>
  )
}
