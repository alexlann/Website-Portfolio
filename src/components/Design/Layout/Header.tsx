import { ReactComponent as Logo } from "../../../assets/logo.svg";

export default function Header({ sections, activeItem, className, scrollTo } : { sections: any, activeItem: any, className: string, scrollTo: (ref: any)=>void }) {
  return (
    <header className={`${className} w-screen z-30`}>
        <nav className="flex w-10/12 mx-auto items-center justify-between gap-14">
            <button onClick={() => scrollTo(sections.hero)} className="w-48" >
                {/* TODO: transition bij :hover */}
                {/* TODO: de AL en eventueel de rest van het logo moet transparant, niet wit*/}
                <Logo />
            </button>
            <ul className="flex w-full h-24 items-center justify-end gap-12">
                { Object.keys(sections).map((section: any, index: number) =>
                    <li key={index}>
                        { !sections[section].hero && (
                            <button onClick={() => scrollTo(sections[section])} className={` ${activeItem.ref === sections[section].ref && "after:bg-green"} partial-underline after:hover:bg-green font-medium text-lg hover:text-green transition duration-150 ease-in transition-color`} >
                                { sections[section].title }
                            </button>
                        )}
                    </li>
                ) }
            </ul>
        </nav>
    </header>
  )
}
