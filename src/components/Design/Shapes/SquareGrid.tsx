import { useWindowDimensions } from "../../../functionality/windowDimensions"

export default function SquareGrid({ dimensions = {x: 20, y: 20}, positionClass = "left-0 top-0"} : { dimensions?: {x: number, y: number}, positionClass?: string}) {
  const { width } = useWindowDimensions();
  let x = dimensions.x;
  let y = dimensions.y;

  // if small screen and x > 45, reduce x to 45
  if (width < 640 && dimensions.x > 30) {
    dimensions.x = 30;
  }

  return (
    <div className={`${positionClass} w-fit absolute -z-10 -my-1 -mx-0.5`}>
      {[...Array(y).keys()].map((i: number) => {
        return (
          <span className="block [line-height:1px] h-1 my-1" key={i}>
            {[...Array(x).keys()].map((j: number) => {
              // TODO: add hover effect
              return <span key={j} className="[line-height:1px] inline-block mx-0.5 [width:3px] [height:3px] bg-light-green rounded-full"></span>
            })}
          </span>
        )
      })}
    </div>
  )
}
