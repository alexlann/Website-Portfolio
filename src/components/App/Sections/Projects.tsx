import { SquareGrid, ProjectCard, SectionTitle, Circle, CenteredPage } from "../../Design";
import t from "../../../data/translation";
import projects from "../../../data/projects";

export default function Projects() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        <>
          <SectionTitle className="mb-16">{ t["projects-title"] }</SectionTitle>
          <div className="grid grid-cols-2 grid-flow-row gap-x-20	gap-y-10 w-full items-stretch ml-8 -mt-4">
            { projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </>
      </CenteredPage>

      {/* Shapes */}
      <Circle positionClass={"[top:10vh] [left:38vw]"} />
      <SquareGrid dimensions={{x: 25, y: 45}} positionClass={"[bottom:12vh] left-0"} />
    </>
  )
}
