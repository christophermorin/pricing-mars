import { useState } from "react"
import Slider from "../Buttons/Slider"
import Card from "../Cards"
import cardData from "../../../db/cardData"

export default function Main() {
  const [sliderSelect, setSliderSelect] = useState<boolean>(false)

  const handleSlider = () => {
    setSliderSelect(!sliderSelect)
  }
  return (
    <div className="container-medium main">
      <h1 className="text-3">Get Your Rocks</h1>
      <div style={{ margin: "auto", }}>
        <Slider
          handleSlider={handleSlider}
          sliderSelect={sliderSelect}
        />
      </div>
      <section className="main-section">
        {cardData.map((card) => {
          return (
            <Card key={card.id} data={card} />
          )
        })}
        {/* <Card />
        <Card />
        <Card /> */}
      </section>
    </div>
  )
}