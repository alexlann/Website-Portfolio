import { SquareGrid, Project, SectionTitle, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../translation";
import projects from "../../../projects";

export default function Projects() {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["projects-title"] }</SectionTitle>
        <div className="grid grid-cols-2 grid-flow-row gap-x-20	gap-y-10 w-full items-stretch">
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
