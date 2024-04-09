import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ProjectType } from "../../../types";
import Card from "./Card";
import Tag from "../Tags/Tag";

export default function ProjectCard({ project } : { project: ProjectType }) {
  return (
    <Card isProject={true}>
        <>
          {/* thumbnail */}
          <div className="w-full h-28 rounded overflow-hidden	">
            <div style={{backgroundImage: `url("./images/${project.image}")`}} className={`w-full h-full object-cover bg-center object-cover bg-cover	bg-no-repeat group-hover:scale-110 transition transition-all duration-150 ease-in-out`}></div>
          </div>

          {/* tags */}
          <ul className="absolute flex flex-col gap-2.5 top-1 left-0 items-start pt-2">
            { project.tags.map((tag, index) => <li key={index}><Tag tag={tag} /></li>) }
          </ul>

          {/* body */}
          <div className="py-2">
            <h4 className="font-medium mb-5">{ project.title }</h4>
            <a rel="noreferrer" target="_blank" href={ project.link } className="absolute bottom-3 right-3 w-full text-green flex items-baseline gap-1 justify-end">
              <span className="border-b-2 border-green leading-none">Github</span><FontAwesomeIcon className="relative top-0.5" icon={faArrowUpRightFromSquare} size={"sm"} />
            </a>
          </div>
        </>
    </Card>
  )
}
