import { Button } from 'components/button';

interface Product {
    name: string;
    text: string;
    newProduct: boolean;
    mobileImageUrl: string;
    tabletImageUrl: string;
    desktopImageUrl: string;
    position: number;
}

export function ProductCard(props: Product) {
    const useFlexRowReverse = props.position % 2 !== 0;

    return (
        <div
            className={
                'flex flex-col gap-8 items-center md:gap-12 lg:flex-row lg:gap-28 ' +
                (useFlexRowReverse ? 'lg:flex-row-reverse' : '')
            }
        >
            <picture className="lg:w-3/6">
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

            <div className="flex flex-col gap-6 text-center md:gap-4 lg:w-3/6 lg:text-start">
                {props.newProduct && (
                    <h3 className="text-overline text-emphasis uppercase">
                        New Product
                    </h3>
                )}
                {/* TODO Force two lines */}
                <h2 className="text-h4 w-80 uppercase text-title mx-auto md:text-h2 lg:mx-0">
                    {props.name}
                </h2>
                <p className="w-80 text-body text-paragraph opacity-50 mx-auto md:mt-4 md:w-4/5 lg:mx-0">
                    {props.text}
                </p>
                <div className="text-title-alt mx-auto md:mt-2 lg:mx-0 lg:mt-6">
                    <Button>See Product</Button>
                </div>
            </div>
        </div>
    );
}