import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../components/Main';

describe('Main', () => {
  it('Main header displays', () => {
    render(<Main />)
    const header = screen.getByRole("heading")
    expect(header).toHaveTextContent("Get Your Rocks")
  })
  it("Should toggle slide state on click", async () => {
    render(<Main />)
    const slider = screen.getByTestId("slider")
    expect(slider).toHaveClass("left")
    fireEvent.click(screen.getByRole("button"))
    expect(slider).toHaveClass("right")
  })
})

