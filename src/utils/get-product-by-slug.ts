import products from '../data/data.json';
import { ProductDataInterface } from './product-data-interface';

export const getProductBySlug = (slug: string): ProductDataInterface => {
    const product = products.filter((product) => {
        return product.slug === slug;
    });

    return product[0];
};
