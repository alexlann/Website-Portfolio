import { SquareGrid, PrimaryButton, SubTitle, Title, WordCloud, Circle, BoldGreen, RightSide, LeftSide } from "../../Design";
import t from "../../../translation";

export default function Hero({ scrollToContact, scrollToProjects } : { scrollToContact: () => void, scrollToProjects: () => void }) {
  return (
    <>
      {/* Left side */}
      <LeftSide>
          <SubTitle>{ t["hero-title-upper"] }</SubTitle>
          <Title>
            {/* TODO: hover:rotate-12 transition transition-all duration-150 ease-in-out */}
            { "Al" }<span className="-rotate-30 inline-block">{ "e" }</span>{ "xander" }<br />
            <BoldGreen>{ "Lannoy" }</BoldGreen>
          </Title>
          <SubTitle>{ t["hero-title-sub"] }</SubTitle>
          <div className="my-9 flex gap-9">
            <PrimaryButton onClick={scrollToContact}>{ t["hero-btn-contact"] }</PrimaryButton>
            <PrimaryButton onClick={scrollToProjects} outline={true}>{ t["hero-btn-projects"] }</PrimaryButton>
          </div>
      </LeftSide>

      {/* Right side */}
      <RightSide>
        <WordCloud />
      </RightSide>
      
      {/* Shapes */}
      <Circle positionClass={"top-28 left-156"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 right-1/3"} />
    </>
  )
}
