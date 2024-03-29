import { notFound } from 'next/navigation';

import { About } from 'components/about';
import { CategoryList } from 'components/category-list';
import { CategoryProductCard } from 'components/category-product-card';

import { getProductFromCategory } from 'utils/get-products-from-category';

interface CategoryProps {
    params: {
        category: string;
    };
}

export default function Category({ params }: CategoryProps) {
    const categoryName = params.category;
    const products = getProductFromCategory(categoryName);

    if (products.length === 0) {
        notFound();
    }

    return (
        <>
            <h1 className="py-8 text-h4 text-title-alt text-center uppercase bg-header md:text-h2 md:py-24">
                {params.category}
            </h1>

            <section className="w-9/10 mx-auto mt-16 flex flex-col gap-28 mb-24 md:my-28 lg:w-4/5">
                {products.map((product, index) => {
                    return (
                        <div key={product.id}>
                            <CategoryProductCard
                                name={product.name}
                                description={product.description}
                                newProduct={product.new}
                                mobileImageUrl={product.categoryImage.mobile}
                                tabletImageUrl={product.categoryImage.tablet}
                                desktopImageUrl={product.categoryImage.desktop}
                                position={index}
                                url={`${product.category}/${product.slug}`}
                            />
                        </div>
                    );
                })}
            </section>
            <div className="w-9/10 mx-auto mt-6 md:mt-20 lg:w-4/5 lg:mt-28">
                <CategoryList />
            </div>
            <About />
        </>
    );
}
