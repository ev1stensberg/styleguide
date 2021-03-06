import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
    {
        heading: 'Fake',
        loggedInLinks: [
            { text: 'A fake menu item', url: '#' }
        ],
        loggedOutLinks: []
    }
];

function toggleCart() {
    alert('You need to add the cart yourself for now');
}


const LoggedOut3Items = () => (
    <PageHeader
        menuId="page-header-menu--example-2"
        logoUrl="#"
        logoTitle="Telia logo"
        logoImageDesktopPath="/public/images/logo/logo.svg"
        logoImageDesktopPathInverted="/public/images/logo/logo-inverted.svg"
        cartItemCount={3}
        menuLinks={menuLinks}
        toggleCart={toggleCart} />
);

export default LoggedOut3Items;