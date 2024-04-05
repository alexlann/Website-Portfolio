import { Footer, SquareGrid, SectionTitle, Circle, ContactCard, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function Contact() {

  return (
    <>
      {/* Center */}
      <CenteredPage>
        <>
          <SectionTitle className="-mt-8">{ t["contact-title"] }</SectionTitle>
          <div className="w-full flex justify-center mt-20">
            <ContactCard />
          </div>
        </>
      </CenteredPage>

      {/* Shapes */}
      <Circle positionClass={"[bottom:25vh] [right:22vw]"} />
      <SquareGrid dimensions={{x: 25, y: 35}} positionClass={"top-0 [left:38vw]"} />
      <Footer />
    </>
  )
}
