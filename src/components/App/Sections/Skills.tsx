import { SquareGrid, SectionTitle, FilledWordCloud, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function Skills() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        {/* TODO: title alignen met andere titels */}
        <SectionTitle className="">{ t["skills-title"] }</SectionTitle>
        <FilledWordCloud />
      </CenteredPage>

      {/* Shapes */}
      {/* TODO: werken met percentages in de plek */}
      <Circle positionClass={"[top:12rem] [left:18rem]"} />
      {/* TODO: werken met percentages in de plek */}
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 [left:28rem]"} />
    </>
  )
}
