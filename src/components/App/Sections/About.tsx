import { SquareGrid, SectionTitle, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function About() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        <SectionTitle>{ t["about-title"] }</SectionTitle>
        <p>
          { t["about-main"] }
        </p>
      </CenteredPage>
      
      {/* Shapes */}
      {/* TODO: werken met percentages in de plek */}
      <Circle positionClass={"[top:12rem] [left:40rem]"} />
      {/* TODO: werken met percentages in de plek */}
      <SquareGrid dimensions={{x: 18, y: 35}} positionClass={"bottom-0 [left:20rem]"} />
    </>
  )
}
