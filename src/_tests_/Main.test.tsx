import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/Hero/Hero';

describe('Hero', () => {
  it('Hero header displays', () => {
    render(<Hero voidBreakPoint={true} />)
    const header = screen.getByText("Hero Title")
    expect(header).toBeInTheDocument()
  })
  it("Slider should toggle slide state on click", async () => {
    render(<Hero voidBreakPoint={true} />)
    const slider = screen.getByTestId("slider")
    expect(slider).toHaveClass("left")
    fireEvent.click(screen.getByTestId("slider_button"))
    expect(slider).toHaveClass("right")
  })
  it("Cards should render with headings", async () => {
    render(<Hero voidBreakPoint={true} />)
    const firstCard = screen.getByText("Pebbles");
    const secondCard = screen.getByText("Mountain");
    const thirdCard = screen.getByText("Boulder");
    expect(firstCard).toBeInTheDocument()
    expect(secondCard).toBeInTheDocument()
    expect(thirdCard).toBeInTheDocument()
  })
})

