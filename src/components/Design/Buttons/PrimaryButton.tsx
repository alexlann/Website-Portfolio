export default function PrimaryButton({ outline, onClick, className, children} : { outline?: boolean, children: string, onClick: ()=>void, className?: string }) {
  
  return (
    <button
      onClick={onClick}
      className={`${outline ? "bg-white text-dark-green border border-green border-2 hover:bg-dark-white" : "bg-green text-white hover:bg-light-green"} ${className} transition transition-all duration-150 ease-in-out font-medium rounded-full px-7 py-2.5 leading-relaxed`}
    >
        { children }
    </button>
  )
}
