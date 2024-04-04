import { Footer, SquareGrid, SectionTitle, Circle, ContactCard, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function Contact() {

  return (
    <>
      {/* Center */}
      <CenteredPage>
        <SectionTitle className="-mt-8">{ t["contact-title"] }</SectionTitle>
        <div className="w-full flex justify-center mt-20">
          <ContactCard />
        </div>
      </CenteredPage>

      {/* Shapes */}
      {/* TODO: werken met percentages in de plek */}
      <Circle positionClass={"[bottom:12rem] [left:6rem]"} />
      {/* TODO: werken met percentages in de plek */}
      <SquareGrid dimensions={{x: 25, y: 35}} positionClass={"top-0 [left:38rem]"} />
      <Footer />
    </>
  )
}
