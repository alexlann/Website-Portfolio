import { SquareGrid, SectionTitle, Circle, CenteredPage, B, Text } from "../../Design";
import t from "../../../data/translation";

export default function About() {
  return (
    <>
      {/* Center */}
      <CenteredPage>
        <>
          <SectionTitle>{ t["about-title"] }</SectionTitle>
          <div>
            <Text>
              Alexander Lannoy is a <B>full-stack and software developer</B>. He has a wide range of knowledge thanks to his <B>ever curious</B> and <B>eager to learn</B> mentality. He has hands-on experience with clients as a <B>self-employed student</B> and as <B>intern</B> full-stack developer. He graduated cum laude as <B>bachelor New Media Development</B> where he learned to use some of the most popular and efficient coding languages, frameworks and libraries.
            </Text>
            <Text>
              Alexander can have a real <B>critical mindset</B> on the projects he works on, lifting the whole to a higher level. In addition, he is a real <B>problem solver</B> due to his <B>out of the box thinking</B> and good <B>insight</B>. He is a <B>clean worker</B> and has <B>eye for detail</B>, resulting in <B>high quality deliverables</B>.
            </Text>
            <Text>
              If Alexander isn't busy tinkering away on one of his <B>personal projects</B>, you will probably find him playing a <B>board game</B> or <B>baking</B> something in his kitchen.
            </Text>
          </div>
        </>
      </CenteredPage>
      
      {/* Shapes */}
      <Circle positionClass={"[top:25vh] [right:40vw]"} />
      <SquareGrid dimensions={{x: 35, y: 18}} positionClass={"top-0 right-0 md:top-auto md:right-auto md:bottom-0 md:[left:20vw]"} />
    </>
  )
}
