import { TagType } from "../../../types";

export default function Tag({ tag } : { tag: TagType }) {
  return (
    <a href={tag.link}>
        { tag.title }
    </a>
  )
}
