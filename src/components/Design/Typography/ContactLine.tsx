import { useEffect, useState } from "react"
import t from "../../../data/translation"
import BoldGreen from "./BoldGreen";

export default function ContactLine({ boldText, text, copiedText, setCopiedText } : { boldText: string, text: string, copiedText: string, setCopiedText: (text: string)=>void }) {
  const [isCopied, setIsCopied] = useState(copiedText === text);

  const copyInformation = () => {
    setIsCopied(true);
    setCopiedText(text);
    navigator.clipboard.writeText(text);
  }

  useEffect(() => {
    setIsCopied(copiedText === text);
  }, [copiedText, text])
  
  

  return (
    <p className="leading-loose relative w-fit">
      <button
        className={`group transition ease-in delay-150 transition-all`}
        onClick={copyInformation}
      >
        <div className="hidden group-hover:block absolute z-10 -top-10 left-0 w-full">
          <div className="flex top-0 flex-col left:0 w-full items-center z-10">
            <div className={`hidden text-center group-hover:block whitespace-nowrap text-white bg-dark-gray rounded-sm text-md h-fit w-fit py-0.5 px-3 border border-light-gray`}>
              { isCopied ? t["btn-copied"] : t["btn-copy"] }
            </div>
            <div className={`hidden group-hover:block bg-dark-gray border-b border-r border-light-gray rotate-45 w-4 h-4 -mt-2`}></div>
          </div>
        </div>
          <BoldGreen>{ boldText }:</BoldGreen> <span className="group-hover:underline">{ text }</span>
      </button>
    </p>
  )
}
