import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';

describe('Tests on ProductImage', () => {
    test('Should display correctly', () => {
        const wrapper = renderer.create(
            <ProductImage img='image.jpg'/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('should display correctly with the product image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})
