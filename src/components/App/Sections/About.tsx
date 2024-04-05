import { SquareGrid, SectionTitle, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function About() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        <>
          <SectionTitle>{ t["about-title"] }</SectionTitle>
          <p>
            {/* TODO: add text */}
            { t["about-main"] }
          </p>
        </>
      </CenteredPage>
      
      {/* Shapes */}
      <Circle positionClass={"[top:25vh] [right:40vw]"} />
      <SquareGrid dimensions={{x: 18, y: 35}} positionClass={"bottom-0 [left:20vw]"} />
    </>
  )
}
