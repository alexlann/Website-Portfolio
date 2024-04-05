import { SectionsType } from "../../../types"

export default function ScrollIndicator({ sections, activeSection, scrollTo } : { sections: SectionsType, activeSection: string, scrollTo: (section: any)=>void }) {
  return (
    <div className="fixed z-10 right-9 content-center h-screen">
      <div className="flex flex-col gap-9">
        { Object.keys(sections).map((section: string, i: number) => {
          return (
            <button
              key={i}
              onClick={() => scrollTo(sections[section].title)}
              className={`w-3.5 h-9 rounded-full ${sections[section].title === activeSection ? "bg-green" : "bg-light-gray"} hover:bg-gray`}
            >
            </button>
          )
        })}
      </div>
    </div>
  )
}
