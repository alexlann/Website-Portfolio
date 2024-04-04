import { SquareGrid, SectionTitle, FilledWordCloud, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../data/translation";

export default function Skills() {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["skills-title"] }</SectionTitle>
        <FilledWordCloud />
      </LeftSide>

      {/* Right side */}
      <RightSide />

      {/* Shapes */}
      <Circle positionClass={"[top:12rem] [left:18rem]"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 [left:28rem]"} />
    </>
  )
}
