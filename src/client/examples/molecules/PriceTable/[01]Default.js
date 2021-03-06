import React from 'react';
import { PriceTable } from '@telia/styleguide';

const productList = [
    { title: 'Abonnement', price: '449,-', subtitle: 'Per mnd' },
    { title: 'Ruter', price: '499,-' },
];

const totalCalculation = { title: 'Minste totalpris', price: '5887,-', subtitle: 'med 12 mnd avtale' };

const Default = () => (
    <PriceTable productListWithPrice={productList} totalTextWithPrice={totalCalculation} />
);

export default Default;