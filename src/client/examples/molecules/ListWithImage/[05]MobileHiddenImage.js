import React from 'react';
import { ListWithImage } from '@telia/styleguide';

const { Item } = ListWithImage;

const ListRightImageTop = () => (
    <ListWithImage src="/public/website-images/boy-ipad.jpg" alt="Boy playing with a tablet in a bed" hideImageForMobile>
        <Item>The <code>hideImageForMobile</code> variant hides the image on smaller screens.</Item>
        <Item>The image is hidden on browser width up to 640px.</Item>
    </ListWithImage>
);

export default ListRightImageTop;