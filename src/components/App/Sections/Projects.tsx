import { SquareGrid, Project, SectionTitle, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../translation";
import projects from "../../../projects";

export default function Projects() {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["projects-title"] }</SectionTitle>
        <div>
          { projects.map(project => <Project key={project.id} project={project} />)}
        </div>
      </LeftSide>

      {/* Right side */}
      <RightSide />
      
      {/* Shapes */}
      <Circle positionClass={"top-28 left-156"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 right-1/3"} />
    </>
  )
}
