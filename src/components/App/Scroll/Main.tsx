import { About, Contact, Hero, Projects, ScrollSection, Skills } from "..";

export default function Main({ sections, scrollTo, activeSection } : { sections: any, scrollTo: (ref: any)=>void, activeSection: any }) {
   return (
    <main>
      <div ref={sections.hero.ref as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.about.ref)}>
          <Hero scrollToContact={() => scrollTo(sections.contact.ref)} scrollToProjects={() => scrollTo(sections.projects.ref)} />
        </ScrollSection>
      </div>
      <div ref={sections.about.ref as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.skills.ref)}>
          <About />
        </ScrollSection>
      </div>
      <div ref={sections.skills.ref as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.projects.ref)}>
          <Skills />
        </ScrollSection>
      </div>
      <div ref={sections.projects.ref as any}>
        <ScrollSection scrollTo={() => scrollTo(sections.contact.ref)}>
          <Projects />
        </ScrollSection>
      </div>
      <div ref={sections.contact.ref as any}>
        <ScrollSection>
          <Contact />
        </ScrollSection>
      </div>
    </main>
  );
}
