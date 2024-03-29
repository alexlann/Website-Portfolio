import { BodyText, SquareGrid, SectionTitle, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../translation";

export default function About() {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["about-title"] }</SectionTitle>
        <BodyText>
          { t["about-main"] }
        </BodyText>
      </LeftSide>

      {/* Right side */}
      <RightSide />
      
      {/* Shapes */}
      <Circle positionClass={"top-28 left-156"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 right-1/3"} />
    </>
  )
}
