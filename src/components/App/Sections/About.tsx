import { SquareGrid, SectionTitle, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../data/translation";

export default function About() {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["about-title"] }</SectionTitle>
        <p>
          { t["about-main"] }
        </p>
      </LeftSide>

      {/* Right side */}
      <RightSide />
      
      {/* Shapes */}
      <Circle positionClass={"[top:12rem] [left:40rem]"} />
      <SquareGrid dimensions={{x: 18, y: 35}} positionClass={"bottom-0 [left:20rem]"} />
    </>
  )
}
