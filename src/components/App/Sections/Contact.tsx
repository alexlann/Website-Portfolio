import { Card, Footer, SquareGrid, SectionTitle, Circle, RightSide, LeftSide } from "../../Design";
import t from "../../../translation";

export default function Contact() {

  return (
    <>
      {/* Left side */}
      <LeftSide>
        <SectionTitle>{ t["contact-title"] }</SectionTitle>
        <Card>
          <>
            <SectionTitle>{ t["contact-card-name"] }</SectionTitle>
            <p>
              <b>{ t["contact-card-email"] }:</b> { t["contact-card-email-link"] }
            </p>
            <p>
              <b>{ t["contact-card-phone"] }:</b> { t["contact-card-phone-link"] }
            </p>
            <p>
              <b>{ t["contact-card-github"] }:</b> { t["contact-card-github-link"] }
            </p>
          </>
        </Card>
      </LeftSide>

      {/* Right side */}
      <RightSide />
      
      {/* Shapes */}
      <Circle positionClass={"top-28 left-156"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 right-1/3"} />
      <Footer />
    </>
  )
}
