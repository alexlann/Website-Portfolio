import Header from './Header'
import t from "../../../translation";

const navItems = [
  { title: t["about-title"], link: "#about" },
  { title: t["skills-title"], link: "#skills" },
  { title: t["projects-title"], link: "#projects" },
  { title: t["contact-title"], link: "#contact" },
]

export default function Layout({ children } : { children: any }) {
  return (
    <main>
        <Header className={"fixed"} navItems={navItems} />
        <div className="snap-mandatory snap-y h-screen w-full relative overflow-y-auto no-scrollbar">
          {children}
        </div>
    </main>
  )
}
