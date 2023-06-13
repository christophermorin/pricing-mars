interface Props {
  handleSlider: () => void;
  sliderSelect: boolean
}

export default function Slider({ handleSlider, sliderSelect }: Props) {
  return (
    <div onClick={handleSlider} className="btn-slider" data-testid="slider_button">
      <div
        data-testid="slider"
        className={`slider-bg ${sliderSelect ? 'right' : 'left'}`}>
        {/* <p style={{ textAlign: "center", color: "red" }}>{sliderSelect ? "Yearly" : "Monthly"}</p> */}
      </div>
      <div className={`slider-text ${sliderSelect ? '' : 'text-active'}`} >
        Monthly
      </div>
      <div className={`slider-text ${sliderSelect ? 'text-active' : ''}`}>
        Yearly
      </div>
    </div>
  )
}