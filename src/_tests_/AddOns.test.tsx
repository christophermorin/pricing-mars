import { render, screen } from '@testing-library/react';
import AddOns from '../components/AddOns/AddsOns';

describe('Addons', () => {
  it('addon header displays', () => {
    render(<AddOns />)
    const header = screen.getByText("Addons Header")
    expect(header).toBeInTheDocument()
  })
  it('addon cards display with headers', () => {
    render(<AddOns />)
    const cards = screen.getAllByTestId("addon-card")

    expect(cards).toHaveLength(3)
    cards.forEach(card => {
      const header = card.querySelector('h3')
      expect(card).toContainElement(header)
    })
  })
})