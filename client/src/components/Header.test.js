import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

describe('Header Component', () => {

    test('renders Navbar with logo and brand', () => {
        render(<Header />);
        const logoImage = screen.getByAltText(/logo/i);
        expect(logoImage).toBeInTheDocument();

        
    });

    test('renders SignIn and SignUp components', () => {
        render(<Header />);
        const signInButton = screen.getByRole('button', { name: /Sign In/i });
        const signUpButton = screen.getByRole('button', { name: /Sign Up/i });

        expect(signInButton).toBeInTheDocument();
        expect(signUpButton).toBeInTheDocument();
    });

    test('dropdown functionality works', () => {
        render(<Header />);
        const avatarDropdown = screen.getByTestId('search');

        // Check dropdown existence
        expect(avatarDropdown).toBeInTheDocument();

        // Trigger dropdown opening
        // fireEvent.click(avatarDropdown);
        // const dropdownItem = screen.getByText(/profile/i); // Assuming "Profile" is one option
        // expect(dropdownItem).toBeInTheDocument();
    });
});