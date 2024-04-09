import { Footer, SquareGrid, SectionTitle, Circle, ContactCard, CenteredPage } from "../../Design";
import t from "../../../data/translation";

export default function Contact() {

  return (
    <>
      {/* Center */}
      <CenteredPage mobileClassName="[margin-bottom:22vh] md:mb-0">
        <>
          <SectionTitle className="md:-mt-8">{ t["contact-title"] }</SectionTitle>
          <div className="w-full flex justify-center mt-20">
            <ContactCard />
          </div>
        </>
      </CenteredPage>

      {/* Shapes */}
      <Circle positionClass={"[right:18vw] [top:10vh] md:[top:auto] md:[right:12vw] md:[bottom:20vh] lg:[right:18vw] lg:[bottom:25vh] xl:[right:22vw]"} />
      <SquareGrid dimensions={{x: 35, y: 25}} positionClass={"left-0 [bottom:12vh] md:bottom-auto md:top-0 md:[left:38vw]"} />
      <Footer />
    </>
  )
}
