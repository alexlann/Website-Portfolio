export default function ScrollIndicator({ sections, activeSection, scrollTo } : { sections: any[], activeSection: any, scrollTo: (section: any)=>void }) {
  return (
    <div className="fixed z-10 right-9 content-center h-screen">
      <div className="flex flex-col gap-9">
        { sections.map((section, i) => {
          return (
            <button
              key={i}
              onClick={() => scrollTo(section)}
              className={`w-3.5 h-9 rounded-full ${section === activeSection ? "bg-green" : "bg-light-gray"} hover:bg-gray`}
            >
            </button>
          )
        })}
      </div>
    </div>
  )
}
