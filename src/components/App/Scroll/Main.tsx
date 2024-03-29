import { useRef, useState } from "react";
import { About, Contact, Hero, Projects, ScrollSection, Skills } from "..";
import { Header, ScrollIndicator } from "../../Design";

export default function Main() {
  const sectionHero = useRef();
  const sectionAbout = useRef();
  const sectionSkills = useRef();
  const sectionProjects = useRef();
  const sectionContact = useRef();

  const [activeSection, setactiveSection] = useState(sectionHero);

  const scrollTo = (section: any) => {
    setactiveSection(section);
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  const setSectionActive = () => {
    // TODO: als viewport gelijk is aan x aantal keer viewport dan is het de x'e section
  }

  return (
    <div>
      <ScrollIndicator scrollTo={scrollTo} sections={[sectionHero, sectionAbout, sectionSkills, sectionProjects, sectionContact]} activeSection={activeSection} />

      <div ref={sectionHero as any}>
        <ScrollSection scrollTo={() => scrollTo(sectionAbout)}>
          {/* TODO: beter integreren */}
          <Hero scrollToContact={() => scrollTo(sectionContact)} scrollToProjects={() => scrollTo(sectionProjects)} />
        </ScrollSection>
      </div>
      <div ref={sectionAbout as any}>
        <ScrollSection scrollTo={() => scrollTo(sectionSkills)}>
          <About />
        </ScrollSection>
      </div>
      <div ref={sectionSkills as any}>
        <ScrollSection scrollTo={() => scrollTo(sectionProjects)}>
          <Skills />
        </ScrollSection>
      </div>
      <div ref={sectionProjects as any}>
        <ScrollSection scrollTo={() => scrollTo(sectionContact)}>
          <Projects />
        </ScrollSection>
      </div>
      <div ref={sectionContact as any}>
        <ScrollSection>
          <Contact />
        </ScrollSection>
      </div>
    </div>
  );
}
