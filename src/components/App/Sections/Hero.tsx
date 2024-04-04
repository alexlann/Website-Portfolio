import { SquareGrid, PrimaryButton, SubTitle, Title, Circle, BoldGreen, RightSide, LeftSide, FilledWordCloud } from "../../Design";
import t from "../../../data/translation";

export default function Hero({ scrollTo } : { scrollTo: (title: string)=>void }) {
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
            <PrimaryButton onClick={()=>scrollTo("contact")}>{ t["hero-btn-contact"] }</PrimaryButton>
            <PrimaryButton onClick={()=>scrollTo("projects")} outline={true}>{ t["hero-btn-projects"] }</PrimaryButton>
          </div>
      </LeftSide>

      {/* Right side */}
      <RightSide>
        <div className="overflow-hidden w-fit h-40 absolute bottom-0">
          {/* TODO: even doen verdwijnen bij scroll */}
          <FilledWordCloud cloudSize={"sm"} />
        </div>
      </RightSide>
      
      {/* Shapes */}
      {/* TODO: werken met percentages in de plek */}
      <Circle positionClass={"[top:6rem] [left:32rem]"} />
      {/* TODO: werken met percentages in de plek */}
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 right-1/3"} />
    </>
  )
}
