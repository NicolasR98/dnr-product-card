import React from 'react';

import renderer from 'react-test-renderer';

import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';

import { product1 } from '../data/products';

describe('Tests on ProductTitle', () => { 
    test('Should display correctly', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom product'/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Should display correctly the product name', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})
