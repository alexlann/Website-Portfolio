import { SquareGrid, SectionTitle, WordCloud, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../translation";

export default function Skills() {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["skills-title"] }</SectionTitle>
        <WordCloud />
      </LeftSide>

      {/* Right side */}
      <RightSide />

      {/* Shapes */}
      <Circle positionClass={"top-28 left-156"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 right-1/3"} />
    </>
  )
}
