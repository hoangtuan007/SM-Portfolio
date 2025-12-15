import React from 'react';

interface AvatarProps {
    url: string;
    alt: string;
    className?: string;
}

/**
 * Avatar component that uses background-image instead of img tag.
 * This is to prevent image distortion when exporting to PDF using html2canvas.
 */
export const Avatar: React.FC<AvatarProps> = ({ url, alt, className = "" }) => {
    return (
        <div
            className={`${className} bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${url})` }}
            aria-label={alt}
            role="img"
        />
    );
};
