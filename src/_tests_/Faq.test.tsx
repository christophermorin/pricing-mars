import { render, screen } from '@testing-library/react';
import Faq from '../components/Faq/Faq';

describe('Faqs', () => {
  it('faq header displays', () => {
    render(<Faq />)
    const header = screen.getByText("Frequently Asked Questions")

    expect(header).toBeInTheDocument()
  })
  it('faq side image displays', () => {
    const container = render(<Faq />)
    const img = container.getByTestId("faq-side-img")

    expect(img).toBeInTheDocument()
  })
  it('faq accordians display', () => {
    const container = render(<Faq />)
    const accordians = container.getAllByTestId("faq-accordian")

    expect(accordians).toHaveLength(3)
  })
})