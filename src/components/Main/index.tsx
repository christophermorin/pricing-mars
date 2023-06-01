import { useState } from "react"
import Slider from "../Buttons/Slider"
import Card from "../Cards"

export default function Main() {
  const [sliderSelect, setSliderSelect] = useState<boolean>(false)

  const handleSlider = () => {
    setSliderSelect(!sliderSelect)
  }
  return (
    <div className="container-large main">
      <h1 className="text-3">Get Your Rocks</h1>
      <div style={{ margin: "auto", }}>
        <Slider
          handleSlider={handleSlider}
          sliderSelect={sliderSelect}
        />
      </div>
      <section data-testid="cards">
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}