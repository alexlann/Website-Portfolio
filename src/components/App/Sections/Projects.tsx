import { SquareGrid, Project, SectionTitle, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";
import projects from "../../../data/projects";

export default function Projects() {
  return (
    <>
      {/* Center */}
      <CenteredPage size="lg">
        <SectionTitle>{ t["projects-title"] }</SectionTitle>
        <div className="grid grid-cols-2 grid-flow-row gap-x-20	gap-y-10 w-full items-stretch">
          { projects.map(project => <Project key={project.id} project={project} />)}
        </div>
      </CenteredPage>

      {/* Shapes */}
      {/* TODO: werken met percentages in de plek */}
      <Circle positionClass={"[top:4rem] [left:28rem]"} />
      {/* TODO: werken met percentages in de plek */}
      <SquareGrid dimensions={{x: 25, y: 45}} positionClass={"bottom-6 left-0"} />
    </>
  )
}
