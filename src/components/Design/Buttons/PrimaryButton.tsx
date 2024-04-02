export default function PrimaryButton({ outline, onClick, children} : { outline?: boolean, children: string, onClick: ()=>void, className?: string }) {
  
  // TODO: hover voor gwne en outline button
  return (
    <button
      onClick={onClick}
      className={`${outline ? "bg-white text-green border border-green border-2 " : "bg-green text-white hover:bg-light-green"} transition transition-all duration-150 ease-in-out font-medium rounded-full px-7 py-2.5 leading-relaxed`}
    >
        { children }
    </button>
  )
}
