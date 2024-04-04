import { Text } from "@visx/text";
import { Wordcloud } from "@visx/wordcloud";
import { colors, skills } from "../../../data/skills";
import { useEffect, useState } from "react";

// TODO: in apart file steken
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function FilledWordCloud({ cloudSize } : { cloudSize?: "sm" | "lg" }) {
  const { height, width } = useWindowDimensions();

  // TODO: fix fontsize in hero
  // TODO: apparat of fields of een ander font gebruiken?

  return (
    <Wordcloud
        words={skills}
        width={width / 2}
        height={height / 2}
        fontSize={(datum) => datum.value * (cloudSize === "sm" ? 4 : 5)}
        font={'apparat'}
        padding={8}
        rotate={0}
        random={() => 0.5}
      >
        {(cloudWords) =>
          cloudWords.map((w: any, i: any) => (
            // TODO: maak clickable
            // TODO: voeg hover effect toe
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={'middle'}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
    </Wordcloud>
  )
}
