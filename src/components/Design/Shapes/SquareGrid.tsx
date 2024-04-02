export default function SquareGrid({ dimensions = {x: 20, y: 20}, positionClass = "left-0 top-0"} : { dimensions?: {x: number, y: number}, positionClass?: any}) {
  return (
    <div className={`${positionClass} w-fit absolute -z-10 -my-1 -mx-0.5`}>
      {[...Array(dimensions.x).keys()].map((i: number) => {
        return (
          <span className="block leading-px h-1 my-1" key={i}>
            {[...Array(dimensions.y).keys()].map((j: number) => {
              // TODO: on hover effect dat na zindert met veranderen van kleur en grotere selectie radius? div rondzetten met padding ofz of divs overlappen?
              return <span key={j} className="leading-px inline-block mx-0.5 w-0.75 h-0.75 bg-light-green rounded-full"></span>
            })}
          </span>
        )
      })}
    </div>
  )
}
