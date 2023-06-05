import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../components/Hero/Hero';

describe('Main', () => {
  it('Main header displays', () => {
    render(<Main />)
    const header = screen.getByText("Get Your Rocks")
    expect(header).toBeInTheDocument()
  })
  it("Slider should toggle slide state on click", async () => {
    render(<Main />)
    const slider = screen.getByTestId("slider")
    expect(slider).toHaveClass("left")
    fireEvent.click(screen.getByTestId("slider_button"))
    expect(slider).toHaveClass("right")
  })
  it("Cards should render with headings", async () => {
    render(<Main />)
    const firstCard = screen.getByText("Pebbles");
    const secondCard = screen.getByText("Mountain");
    const thirdCard = screen.getByText("Boulder");
    expect(firstCard).toBeInTheDocument()
    expect(secondCard).toBeInTheDocument()
    expect(thirdCard).toBeInTheDocument()
  })
})

