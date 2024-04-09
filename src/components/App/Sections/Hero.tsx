import { SquareGrid, PrimaryButton, SubTitle, Title, Circle, B, RightSide, LeftSide, FilledWordCloud } from "../../Design";
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
              <B>{ "Lannoy" }</B>
            </>
          </Title>
          <SubTitle>{ t["hero-title-sub"] }</SubTitle>
          <div className="my-9 flex gap-9">
            <PrimaryButton className="w-fit md:w-full lg:w-fit" onClick={()=>scrollTo("contact")}>{ t["hero-btn-contact"] }</PrimaryButton>
            <PrimaryButton className="hidden sm:inline md:hidden lg:inline" onClick={()=>scrollTo("projects")} outline={true}>{ t["hero-btn-projects"] }</PrimaryButton>
          </div>
        </>
      </LeftSide>

      {/* Right side */}
      <RightSide imageSrc={"./images/hero-image.png"}>
        <div className="overflow-hidden [width:45%] h-56 absolute bottom-0">
          <div className="[scale:72%]">
            <FilledWordCloud spiral="archimedean" colorOptions={"dark"} />
          </div>
        </div>
      </RightSide>
      
      {/* Shapes */}
      <Circle positionClass={"[left:52vw] [top:25vh] md:[left:32vw]"} />
      <SquareGrid dimensions={{x: 55, y: 15}} positionClass={"top-0 [right:32vw]"} />
    </>
  )
}
