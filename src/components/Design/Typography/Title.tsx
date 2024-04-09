import { ReactElement } from "react";

const Title = ({ children } : { children: string | ReactElement }) => {
    return (
        <h1 className="whitespace-nowrap font-title font-bold text-black [font-size:3rem] sm:[font-size:5rem] md:[font-size:4rem] lg:[font-size:4.5rem] xl:[font-size:5rem] 2xl:text-8xl mt-5 mb-4 leading-none group">
            { children }
        </h1>
    )
};

export default Title;
