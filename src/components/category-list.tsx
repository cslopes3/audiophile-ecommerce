import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ProductImage } from './produt-image';

import earphoneImage from '@public/shared/no-background/earphones-no-background.png';
import headphoneImage from '@public/shared/no-background/headphones-no-background.png';
import speakersImage from '@public/shared/no-background/speakers-no-background.png';
import arrow from '@public/shared/svg/icon-arrow-right.svg';

interface CategoryType {
    id: string;
    name: string;
    image: StaticImageData;
    variant: 'headphone' | 'speaker' | 'earphone';
}

export function CategoryList() {
    const products: CategoryType[] = [
        {
            id: '1',
            name: 'Headphones',
            image: headphoneImage,
            variant: 'headphone',
        },
        {
            id: '2',
            name: 'Speakers',
            image: speakersImage,
            variant: 'speaker',
        },
        {
            id: '3',
            name: 'Earphones',
            image: earphoneImage,
            variant: 'earphone',
        },
    ];

    return (
        <section className="mx-auto flex flex-col items-center md:flex-row md:gap-3">
            {products.map((product) => {
                return (
                    <article
                        key={product.id}
                        className="flex flex-col items-center mt-4 w-full"
                    >
                        <ProductImage
                            src={product.image}
                            alt={`${product.variant} product image`}
                            quality={100}
                            variant={product.variant}
                        />
                        <div className="flex flex-col items-center mt-12 pb-6 w-full bg-neutral-default rounded-lg lg:mt-24">
                            <h6 className="pt-20 text-h3-mobile text-title uppercase lg:text-h6 lg:pt-28">
                                {product.name}
                            </h6>
                            <div className="flex items-center pt-4">
                                <Link
                                    className="uppercase text-sub-title text-title opacity-50 transition-all hover:text-emphasis hover:opacity-100"
                                    href={product.name.toLowerCase()}
                                    replace
                                >
                                    Shop
                                </Link>
                                <Image
                                    className="pl-2"
                                    src={arrow}
                                    width={16}
                                    alt="Right arrow icon"
                                />
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
