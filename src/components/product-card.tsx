import { Button } from 'components/button';

import { IncreaseDecreaseButton } from './increase-decrease-button';

interface Product {
    name: string;
    description: string;
    newProduct: boolean;
    mobileImageUrl: string;
    tabletImageUrl: string;
    desktopImageUrl: string;
    price: number;
}

export function ProductCard(props: Product) {
    return (
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
            <picture className="md:w-[45%] lg:w-[55%]">
                <source
                    media="(min-width:1024px)"
                    srcSet={props.desktopImageUrl}
                />
                <source
                    media="(min-width:768px)"
                    srcSet={props.tabletImageUrl}
                />
                <img className="w-full rounded-lg" src={props.mobileImageUrl} />
            </picture>

            <div className="flex flex-col gap-6 md:w-[55%] md:justify-center lg:w-[45%]">
                {props.newProduct && (
                    <h3 className="text-overline text-emphasis uppercase">
                        New Product
                    </h3>
                )}

                <h2 className="text-h4 uppercase lg:text-h2">{props.name}</h2>
                <p className="text-body opacity-50">{props.description}</p>

                <h6 className="text-h6">
                    {props.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </h6>
                <div className="flex gap-4 text-title-alt">
                    <IncreaseDecreaseButton />
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}
