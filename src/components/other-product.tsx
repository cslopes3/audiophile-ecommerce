import { Button } from './button';

interface OtherProductProps {
    others: {
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        category?: string;
    }[];
}

export function OtherProduct(props: OtherProductProps) {
    return (
        <section className="mt-28">
            <h2 className="text-h5 uppercase text-title mb-10 text-center md:mt-14 md:text-h3">
                You May Also Like
            </h2>
            <div className="flex flex-col gap-14 md:flex-row md:gap-3 lg:gap-7">
                {props.others.map((product) => {
                    return (
                        <article
                            key={product.slug}
                            className="flex flex-col gap-8"
                        >
                            <picture className="">
                                <source
                                    media="(min-width:1024px)"
                                    srcSet={product.image.desktop}
                                />
                                <source
                                    media="(min-width:768px)"
                                    srcSet={product.image.tablet}
                                />
                                <img
                                    className="w-full rounded-lg"
                                    src={product.image.mobile}
                                    alt={`Photo of ${product.name} product`}
                                />
                            </picture>
                            <h3 className="text-h5 uppercase text-title mx-auto">
                                {product.name}
                            </h3>
                            <div className="text-title-alt mx-auto">
                                <Button
                                    url={`/${product.category}/${product.slug}`}
                                >
                                    See Product
                                </Button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
