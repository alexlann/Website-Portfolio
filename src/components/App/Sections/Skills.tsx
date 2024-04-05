import { SquareGrid, SectionTitle, FilledWordCloud, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function Skills() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        <>
          <SectionTitle className="">{ t["skills-title"] }</SectionTitle>
          <FilledWordCloud />
        </>
      </CenteredPage>

      {/* Shapes */}
      <Circle positionClass={"[top:25vh] [left:18vw]"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 [left:32vw]"} />
    </>
  )
}
