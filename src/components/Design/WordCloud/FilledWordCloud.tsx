import { Text } from "@visx/text";
import { Wordcloud } from "@visx/wordcloud";
import { darkColors, lightColors, skills } from "../../../data/skills";
import { useWindowDimensions } from "../../../functionality/windowDimensions";

export default function FilledWordCloud({ spiral="rectangular", colorOptions = "light" } : { spiral?: "rectangular" | "archimedean", colorOptions?: "dark" | "light" }) {
  const { height, width } = useWindowDimensions();
  const colors = colorOptions === "light" ? lightColors : darkColors;

  let cloudWidth = width / 2;
  let cloudHeight = height / 2;

  let fontMultiplier = 6;

  switch (true) {
    case (width > 1280):
      fontMultiplier = 6;
      cloudWidth = width / 2;
      cloudHeight = height / 2;
      break;
    case (width > 768):
      fontMultiplier = 5;
      cloudWidth = width / 3 * 2;
      cloudHeight = height / 3 * 2;
      break;
    case (width > 640):
      fontMultiplier = 4;
      cloudWidth = width / 5 * 4;
      cloudHeight = width / 2;
      break;
    default:
      fontMultiplier = 3;
      cloudWidth = width / 12 * 10;
      cloudHeight = width / 3 * 2;
      break;
  }

  return (
    <Wordcloud
        words={skills}
        width={cloudWidth}
        height={cloudHeight}
        fontSize={(datum) => datum.value * fontMultiplier}
        font={'apparat'}
        padding={10}
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
