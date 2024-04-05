export default function SquareGrid({ dimensions = {x: 20, y: 20}, positionClass = "left-0 top-0"} : { dimensions?: {x: number, y: number}, positionClass?: string}) {
  return (
    <div className={`${positionClass} w-fit absolute -z-10 -my-1 -mx-0.5`}>
      {[...Array(dimensions.x).keys()].map((i: number) => {
        return (
          <span className="block [line-height:1px] h-1 my-1" key={i}>
            {[...Array(dimensions.y).keys()].map((j: number) => {
              // TODO: add hover effect
              return <span key={j} className="[line-height:1px] inline-block mx-0.5 [width:3px] [height:3px] bg-light-green rounded-full"></span>
            })}
          </span>
        )
      })}
    </div>
  )
}
