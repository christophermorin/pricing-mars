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
      </div>
      <div className="text-left">
        Left side
      </div>
      <div className="text-right">
        Right Side
      </div>
    </div>
  )
}