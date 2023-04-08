import dynamic from "next/dynamic"
import type p5Type from "p5"
import { Vector } from "p5"

const Sketch = dynamic(import("react-p5"), { ssr: false })

export const FlowField = ({
  className,
  width = 900,
  height = 288,
  bgColor,
  fgColor,
}: {
  className: string
  width: number
  height: number
  bgColor: string
  fgColor: string
}) => {
  const getParams = (p5: p5Type) => {
    const spacing = width - 2
    const nLines = p5.map(width, 200, 1000, 14, 60)
    return {
      spacing,
      nLines,
      factorLines: spacing / (nLines - 1),
      density: 0.006,
    }
  }

  const setup = (p5: p5Type, canvasParentRef: Element): void => {
    p5.createCanvas(width, height).parent(canvasParentRef)
    // p5.fill()
    // p5.strokeWeight(0.5)
    // p5.strokeCap(p5.ROUND)

    p5.noStroke()
    // p5.textFont("monospace")
  }

  const windowResized = (p5: p5Type): void => {
    p5.resizeCanvas(width, height)
  }

  const draw = (p5: p5Type): void => {
    const fgC = p5.color(fgColor)
    p5.fill(fgC)
    const bgC = p5.color(bgColor)
    p5.background(bgC)

    const { spacing, factorLines, nLines, density } = getParams(p5)
    for (let i = 0; i < nLines; i++) {
      let y = factorLines * i
      for (let x = 0; x < spacing; x++) {
        let noise = p5.noise(x * density, y * density, p5.frameCount * 0.0027)

        if (x % p5.floor(p5.map(width, 200, 1000, 25, 16)) === 0) {
          if (noise > 0.5) {
            p5.circle(
              x,
              y,
              4 * p5.map(p5.sin(noise * 40), -Math.PI / 2, Math.PI / 2, 0, 2)
            )
          } else {
            // p5.circle(x, y, 1)
          }
        }
      }
    }
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      className={className}
    />
  )
}
