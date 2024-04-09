import { SquareGrid, SectionTitle, FilledWordCloud, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function Skills() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        <>
          <SectionTitle>{ t["skills-title"] }</SectionTitle>
          <div className="overflow-hidden flex items-center justify-center">
            <div>
              <FilledWordCloud />
            </div>
          </div>
        </>
      </CenteredPage>

      {/* Shapes */}
      <Circle positionClass={"[left:20vw] [top:5vh] md:[left:8vw] lg:[left:12vw] md:[top:25vh] 2xl:[left:18vw]"} />
      <SquareGrid dimensions={{x: 55, y: 15}} positionClass={"bottom-0 left-0 md:bottom-auto md:top-0 md:[left:32vw]"} />
    </>
  )
}
