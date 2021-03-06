import React from 'react';
import { ListWithImage } from '@telia/styleguide';

const { Item } = ListWithImage;

const ListRightImageTop = () => (
    <ListWithImage src="/public/website-images/boy-ipad.jpg" alt="Boy playing with a tablet in a bed" listPosition="right" imagePosition="top">
        <Item>The <code>listPosition="right"</code> variant shows the list on the right (large screens).</Item>
        <Item>We have also specified <code>imagePosition="top"</code>, so the image will be on the top on small screens.</Item>
    </ListWithImage>
);

export default ListRightImageTop;