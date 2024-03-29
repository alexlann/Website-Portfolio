import { ProjectType } from "../../../types";
import Card from "./Card";
import Tag from "./Tag";
import CardHeading from "../Typography/CardHeading";

export default function Project({ project } : { project: ProjectType }) {
  return (
    <Card>
        <>
          <img src={ project.image } alt={ project.title } />
          <CardHeading>{ project.title }</CardHeading>
          <ul>
            { project.tags.map((tag, index) => <li key={index}><Tag tag={tag} /></li>) }
          </ul>
        </>
    </Card>
  )
}
