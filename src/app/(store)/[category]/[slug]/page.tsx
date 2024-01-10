import { notFound } from 'next/navigation';

import { About } from 'components/about';
import { CategoryList } from 'components/category-list';
import { Gallery } from 'components/gallery';
import { GoBackLink } from 'components/go-back-link';
import { OtherProduct } from 'components/other-product';
import { ProductCard } from 'components/product-card';

import { getProductBySlug } from 'utils/get-product-by-slug';

interface ProductProps {
    params: {
        category: string;
        slug: string;
    };
}

export default function ProductPage({ params }: ProductProps) {
    const slug = params.slug;
    const product = getProductBySlug(slug);

    if (!product || product.category != params.category) {
        notFound();
    }

    return (
        <div className="w-9/10 mx-auto mt-4 md:mt-8 lg:mt-20 lg:w-4/5">
            <GoBackLink />
            <section className="mt-6 lg:mt-14">
                <ProductCard
                    id={product.id.toString()}
                    name={product.name}
                    description={product.description}
                    newProduct={product.new}
                    mobileImageUrl={product.image.mobile}
                    tabletImageUrl={product.image.tablet}
                    desktopImageUrl={product.image.desktop}
                    price={product.price}
                    imageUrl={product.cartImage}
                />
            </section>
            <section className="w-9/10 flex flex-col my-20 gap-20 md:gap-28 md:mb-36 lg:mt-40 lg:flex-row lg:gap-0 lg:justify-between">
                <article className="lg:w-3/5">
                    <h3 className="text-h5 text-title uppercase lg:text-h3">
                        Features
                    </h3>
                    <p className="text-body text-paragraph opacity-50 mt-6 whitespace-pre-line lg:mt-8">
                        {product.features}
                    </p>
                </article>
                <article className="md:flex lg:flex-col lg:w-1/4">
                    <h3 className="text-h5 text-title uppercase mb-6 md:w-3/6 lg:text-h3 lg:w-full">
                        In the box
                    </h3>
                    <div className="flex flex-col gap-2">
                        {product.includes.map((item) => {
                            return (
                                <p key={item.item} className="text-body">
                                    <span className="text-emphasis">
                                        {item.quantity}x
                                    </span>
                                    <span className="ml-6 text-paragraph opacity-50">
                                        {item.item}
                                    </span>
                                </p>
                            );
                        })}
                    </div>
                </article>
            </section>
            <Gallery
                firstImage={product.gallery.first}
                secondImage={product.gallery.second}
                thirdImage={product.gallery.third}
            />
            <OtherProduct others={product.others} />
            <div className="w-full mt-28 md:mt-20 lg:mt-28">
                <CategoryList />
            </div>
            <About isfullSize={true} />
        </div>
    );
}
