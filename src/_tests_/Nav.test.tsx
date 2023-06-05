import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav/Nav';

describe('desktop nav', () => {
  it('renders desktop nav', () => {
    render(<Nav navBreakPoint={true} />);
    const navLinks = screen.getByRole("navigation")
    expect(navLinks).toBeDefined()
  });
  it('renders login/signup buttons', () => {
    render(<Nav navBreakPoint={true} />);
    const loginButton = screen.getByText("Login");
    const signUpButton = screen.getByText("Sign Up")
    expect(loginButton).toBeDefined();
    expect(signUpButton).toBeDefined();
  })
});

describe('mobile nav', () => {
  it('renders mobile nav', () => {
    render(<Nav navBreakPoint={false} />);
    const navMenu = screen.getByRole("navigation")
    expect(navMenu).toBeDefined()
  });
})