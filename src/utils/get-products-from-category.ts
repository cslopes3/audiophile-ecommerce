import products from '../data/data.json';

export const getProductFromCategory = (slug: string) => {
    const productsFromCategory = products.filter((product) => {
        return product.category === slug;
    });

    return productsFromCategory.reverse();
};
