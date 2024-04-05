import { SectionType } from "../../../types";
import ScrollSection from "../Scroll/ScrollSection";

export default function Page({ section, refCallback } : { section: SectionType, refCallback: any}) {
  return (
    <div ref={ refCallback } id={section.title}>
      <ScrollSection>
        { section.element }
      </ScrollSection>
    </div>
  )
}
