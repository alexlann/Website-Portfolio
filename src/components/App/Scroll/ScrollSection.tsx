import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react';

const ScrollSection = ({ scrollTo, children } : { scrollTo?: (section: any)=>void, children: ReactElement }) => {
  return (
    <section className={`h-screen w-full snap-center relative`}>
      <div>
        <div className="mx-auto w-10/12">
          <div className="h-screen flex content-center items-center">
            <div className="flex w-full gap-16 content-center items-center h-5/6 pt-16">
              { children }
            </div>
          </div>
        </div>
        { scrollTo && (
          <div className="absolute w-screen text-center bottom-9">
            <button onClick={scrollTo}>
              <FontAwesomeIcon icon={faAngleDown} size={"2xl"} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
};

export default ScrollSection;