import products from '../data/data.json';
import { ProductDataInterface } from './product-data-interface';

export const getProductBySlug = (slug: string): ProductDataInterface => {
    const product: ProductDataInterface[] = products.filter((product) => {
        return product.slug === slug;
    });

    product[0].others.map((other) => {
        products.forEach((product) => {
            if (other.slug === product.slug) {
                other.category = product.category;
            }
        });

        other.slug;
    });

    return product[0];
};
