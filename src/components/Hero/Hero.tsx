import { useState } from "react"
import Slider from "../Buttons/Slider"
import Card from "../Cards/Cards"
import cardData from "../../db/cardData"
import { cardVoid } from "../../db/cardData"

export default function Main({ voidBreakPoint }: { voidBreakPoint: boolean }) {
  const [sliderSelect, setSliderSelect] = useState<boolean>(false)

  const handleSlider = () => {
    setSliderSelect(!sliderSelect)
  }
  return (
    <main className="container-medium main">
      <h1 className="text-4">Pick the life plan that suits you best</h1>
      <div style={{ margin: "auto", }}>
        <Slider
          handleSlider={handleSlider}
          sliderSelect={sliderSelect}
        />
      </div>
      <section className="col-container">
        {cardData.map((card) => {
          return (
            <Card key={card.id} data={card} />
          )
        })}
        {voidBreakPoint && <Card data={cardVoid} />}
      </section>
    </main>
  )
}