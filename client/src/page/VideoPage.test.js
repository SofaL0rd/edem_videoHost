import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { VideoPage } from './VideoPage';  

describe('VideoPage Component', () => {


    test('renders video element with correct source', () => {
        
            render(<VideoPage />);
       
        const videoElement = screen.getByTestId('video-element'); 
        expect(videoElement).toBeInTheDocument();
        videoElement.getAttribute("src") === "testVideo"
    });

    test('displays the video title correctly', () => {
        render(<VideoPage />);
        const titleElement = screen.getByText(/Video title/i);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass('text-3xl');
    });

    test('displays the author name and avatar', () => {
        render(<VideoPage />);
        const authorElement = screen.getByText('Jonh Doe');
        expect(authorElement).toBeInTheDocument();

        const avatarElements = screen.getAllByTestId('flowbite-avatar-img');
        avatarElements.forEach(avatarElement => {
            expect(avatarElement).toBeInTheDocument(); 
        });
    });

    test('video controls should be present', () => {
        render(<VideoPage />);
        const videoElement = screen.getByTestId('video-element');
        expect(videoElement).toHaveAttribute('controls');
    });

});