import { SquareGrid, PrimaryButton, SubTitle, Title, Circle, BoldGreen, RightSide, LeftSide, FilledWordCloud } from "../../Design";
import t from "../../../data/translation";

export default function Hero({ scrollTo } : { scrollTo: (title: string)=>void }) {
  return (
    <>
      {/* Left side */}
      <LeftSide>
        <>
          <SubTitle>{ t["hero-title-upper"] }</SubTitle>
          <Title>
            <>
              { "Al" }<span className="[rotate:-30deg] group-hover:[rotate:0deg] transition transition-all duration-250 ease-in-out inline-block">{ "e" }</span>{ "xander" }<br />
              <BoldGreen>{ "Lannoy" }</BoldGreen>
            </>
          </Title>
          <SubTitle>{ t["hero-title-sub"] }</SubTitle>
          <div className="my-9 flex gap-9">
            <PrimaryButton onClick={()=>scrollTo("contact")}>{ t["hero-btn-contact"] }</PrimaryButton>
            <PrimaryButton onClick={()=>scrollTo("projects")} outline={true}>{ t["hero-btn-projects"] }</PrimaryButton>
          </div>
        </>
      </LeftSide>

      {/* Right side */}
      <RightSide>
        <div className="overflow-hidden w-fit h-40 absolute bottom-0">
          <FilledWordCloud spiral="archimedean" cloudSize={"sm"} />
        </div>
      </RightSide>
      
      {/* Shapes */}
      <Circle positionClass={"[top:15vh] [left:32vw]"} />
      <SquareGrid dimensions={{x: 15, y: 55}} positionClass={"top-0 [right:32vw]"} />
    </>
  )
}
