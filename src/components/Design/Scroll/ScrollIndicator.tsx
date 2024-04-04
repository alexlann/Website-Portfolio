export default function ScrollIndicator({ sections, activeSection, scrollTo } : { sections: any, activeSection: any, scrollTo: (section: any)=>void }) {
  return (
    // TODO: controleren in verschillende browsers
    // TODO: overal comments toevoegen
    <div className="fixed z-10 right-9 content-center h-screen">
      <div className="flex flex-col gap-9">
        { Object.keys(sections).map((section: any, i: number) => {
          return (
            <button
              key={i}
              onClick={() => scrollTo(sections[section])}
              className={`w-3.5 h-9 rounded-full ${sections[section].ref === activeSection.ref ? "bg-green" : "bg-light-gray"} hover:bg-gray`}
            >
            </button>
          )
        })}
      </div>
    </div>
  )
}
