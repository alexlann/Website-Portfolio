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
          <div className="grid grid-cols-1 sm:w-3/5 sm:mx-auto md:w-full md:mx-0 md:grid-cols-2 grid-flow-row gap-x-20	gap-y-10 w-full items-stretch -mt-4">
            { projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </>
      </CenteredPage>

      {/* Shapes */}
      <Circle positionClass={"[top:5vh] [right:15vw] md:right-auto md:[top:10vh] md:[left:38vw]"} />
      <SquareGrid dimensions={{x: 45, y: 25}} positionClass={"[bottom:12vh] left-0"} />
    </>
  )
}
