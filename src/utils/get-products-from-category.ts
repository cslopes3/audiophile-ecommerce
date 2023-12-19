import products from '../data/data.json';
import { ProductDataInterface } from './product-data-interface';

export const getProductFromCategory = (
    slug: string,
): ProductDataInterface[] => {
    const productsFromCategory = products.filter((product) => {
        return product.category === slug;
    });

    return productsFromCategory.reverse();
};
