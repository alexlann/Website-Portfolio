import { ReactComponent as Logo } from "../../../assets/logo.svg";


export default function Header({ navItems, className } : { navItems: {title: string, link: string, home?: boolean}[], className?: string }) {
  return (
    <header className={`${className} w-screen z-30`}>
        <nav className="flex w-10/12 mx-auto items-center justify-between gap-14">
            {/* TODO: Ook een scrollTo van maken en die dan beter integreren zoals bij hero buttons*/}
            <a href="/" className="w-48">
                <Logo />
            </a>
            <ul className="flex w-full h-24 items-center justify-end gap-12">
                { navItems.map((item, index) =>
                    <li key={index}>
                        <a className="font-medium text-lg hover:text-green transition duration-150 ease-in transition-color partial-underline" href={ item.link }>
                            { item.title }
                        </a>
                    </li>
                ) }
            </ul>
        </nav>
    </header>
  )
}
