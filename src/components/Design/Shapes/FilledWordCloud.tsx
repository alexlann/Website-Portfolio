import { Text } from "@visx/text";
import { Wordcloud } from "@visx/wordcloud";
import { colors, skills } from "../../../data/skills";
import { useWindowDimensions } from "../../../functionality/windowDimensions";

export default function FilledWordCloud({ cloudSize = "lg", spiral="rectangular" } : { cloudSize?: "sm" | "lg", spiral?: "rectangular" | "archimedean" }) {
  const { height, width } = useWindowDimensions();

  // TODO: fix fontsize in hero
  // TODO: use apparat or fields or other font?
  return (
    <Wordcloud
        words={skills}
        width={width / 2}
        height={height / 2}
        fontSize={(datum) => datum.value * (cloudSize === "sm" ? 4 : 6)}
        font={'apparat'}
        padding={8}
        rotate={0}
        spiral={spiral}
        random={() => 0.5}
      >
        {(cloudWords) =>
          cloudWords.map((w: any, i: number) => (
            // TODO: make clickable
            // TODO: add hover effect
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
