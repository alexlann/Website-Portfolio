import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { SectionsType } from "../../../types";

export default function Header({ sections, activeSection, scrollTo } : { sections: SectionsType, activeSection: string, scrollTo: (ref: any)=>void }) {
    return (
        <header className={`fixed w-screen z-30`}>
            <nav className="flex w-10/12 mx-auto items-center justify-between gap-14 h-24">
                <button
                    onClick={() => scrollTo(sections.hero.title)}
                    className="w-48"
                >
                    <Logo className="hover:scale-95 transition transition-all duration-150 [height:42px] md:[height:h-fit]" />
                </button>
                {/* TODO: add hamburger menu? */}
                <ul className="hidden md:flex w-full items-center justify-end gap-12">
                    { Object.keys(sections).map((section: string, index: number) =>
                        <li key={index}>
                            { !sections[section].hero && (
                                <button
                                    onClick={() => scrollTo(sections[section].title)}
                                    className={` ${activeSection === sections[section].title && "after:bg-green"} partial-underline after:hover:bg-green font-medium text-lg hover:text-green transition duration-150 ease-in transition-color`}
                                >
                                    { sections[section].sectionTitle }
                                </button>
                            )}
                        </li>
                    ) }
                </ul>
            </nav>
        </header>
    )
}
