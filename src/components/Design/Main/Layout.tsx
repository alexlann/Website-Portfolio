import Header from './Header'
import t from "../../../translation";
import { useEffect, useRef, useState } from 'react';
import { Main } from '../../App';
import ScrollIndicator from '../Scroll/ScrollIndicator';

export default function Layout() {
  const sections: any = {
    hero: {
      ref: useRef(),
      hero: true,
    },
    about: {
      title: t["about-title"],
      ref: useRef(),
    },
    skills: {
      title: t["skills-title"],
      ref: useRef(),
    },
    projects: {
      title: t["projects-title"],
      ref: useRef(),
    },
    contact: {
      title: t["contact-title"],
      ref: useRef(),
    },
  };

  const [activeSection, setactiveSection] = useState(sections.hero);

  const scrollTo = (section: any) => {
    setactiveSection(section);
    section.ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    Object.keys(sections).forEach(section => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setactiveSection(sections[section]);
          }
        },
        {
          root: null, // viewport
          rootMargin: '0px', // no margin
          threshold: 0.5, // 50% of target visible
        }
      );

      if (sections[section].ref.current) {
        observer.observe(sections[section].ref.current);
      }

      // Clean up the observer
      return () => {
        if (sections[section].ref.current) {
          observer.unobserve(sections[section].ref.current);
        }
      };
    });
  });

  return (
    <div>
        <Header className={"fixed"} sections={sections} activeItem={activeSection} scrollTo={scrollTo} />
        <div className="snap-mandatory snap-y h-screen w-full relative overflow-y-auto no-scrollbar">
          <ScrollIndicator scrollTo={scrollTo} sections={sections} activeSection={activeSection} />
          <Main activeSection={activeSection} scrollTo={scrollTo} sections={sections} />
        </div>
    </div>
  )
}
