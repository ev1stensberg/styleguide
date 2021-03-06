import React from 'react';
import { FullWidthImage } from '@telia/styleguide';

const logoSources = [
    { type: 'mobile', srcSet: '/public/website-images/BusinessDevelopment_Pebble.png' },
    { type: 'desktop', srcSet: '/public/website-images/BusinessDevelopment_Pebble.png' }
];

const FullWidthImageWithLogo = () => (
    <FullWidthImage
        logoSources={logoSources}
        logoAlign="top-right"
        src="https://placekitten.com/1440/440"
        alt="Kitten" />
);

export default FullWidthImageWithLogo;