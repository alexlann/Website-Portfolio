import { Footer, SquareGrid, SectionTitle, Circle, RightSide, LeftSide, ContactCard } from "../../Design";
import t from "../../../data/translation";

export default function Contact() {

  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle className="-mt-8">{ t["contact-title"] }</SectionTitle>
        <div className="w-full flex justify-center mt-20">
          <ContactCard />
        </div>
      </LeftSide>

      {/* Right side */}
      <RightSide />
      
      {/* Shapes */}
      <Circle positionClass={"[bottom:12rem] [left:6rem]"} />
      <SquareGrid dimensions={{x: 25, y: 35}} positionClass={"top-0 [left:38rem]"} />
      <Footer />
    </>
  )
}
