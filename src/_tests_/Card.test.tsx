import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Cards';
import cardData from '../db/cardData';

describe('Card', () => {
  it('Card buttons are present', () => {
    render(<Card data={cardData[0]} />)
    const top_button = fireEvent.click(screen.getByTestId("card_button_top"))
    const bottom_button = fireEvent.click(screen.getByTestId("card_button_bottom"))
    expect(top_button).toBe(true)
    expect(bottom_button).toBe(true)
  })

})