import { About } from 'components/about';
import { CategoryList } from 'components/category-list';
import { ProductCard } from 'components/product-card';

import { products } from 'data/product-per-category';

interface CategoryProps {
    params: {
        slug: string;
    };
}

export default function Category({ params }: CategoryProps) {
    const categoryName = params.slug;

    //TODO
    if (!(categoryName in products)) {
        return <h1>Error</h1>;
    }

    return (
        <>
            <h1 className="py-8 text-h4 text-title-alt text-center uppercase bg-header md:text-h2 md:py-24">
                {params.slug}
            </h1>

            <section className="w-9/10 mx-auto mt-16 flex flex-col gap-28 mb-24 md:my-28 lg:w-4/5">
                {products[categoryName].map((product, index) => {
                    return (
                        <div key={product.id}>
                            <ProductCard
                                name={product.name}
                                text={product.text}
                                newProduct={product.newProduct}
                                mobileImageUrl={product.mobileImageUrl}
                                tabletImageUrl={product.tabletImageUrl}
                                desktopImageUrl={product.desktopImageUrl}
                                position={index}
                            />
                        </div>
                    );
                })}
            </section>
            <CategoryList />
            <About />
        </>
    );
}
