import { SquareGrid, Project, SectionTitle, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../data/translation";
import projects from "../../../data/projects";

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
      <Circle positionClass={"[top:4rem] [left:28rem]"} />
      <SquareGrid dimensions={{x: 25, y: 45}} positionClass={"bottom-6 left-0"} />
    </>
  )
}
