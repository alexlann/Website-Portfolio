import { About, Contact, Hero, Projects, ScrollSection, Skills } from "..";

export default function Main({ sections, scrollTo, activeSection } : { sections: any, scrollTo: (ref: any)=>void, activeSection: any }) {
   return (
    <main>
      <div ref={sections.hero as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.about)}>
          <Hero scrollToContact={() => scrollTo(sections.contact)} scrollToProjects={() => scrollTo(sections.projects)} />
        </ScrollSection>
      </div>
      <div ref={sections.about as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.skills)}>
          <About />
        </ScrollSection>
      </div>
      <div ref={sections.skills as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.projects)}>
          <Skills />
        </ScrollSection>
      </div>
      <div ref={sections.projects as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.contact)}>
          <Projects />
        </ScrollSection>
      </div>
      <div ref={sections.contact as any}>
        <ScrollSection>
          <Contact />
        </ScrollSection>
      </div>
    </main>
  );
}
