interface Gallery {
    firstImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    secondImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    thirdImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

export function Gallery(props: Gallery) {
    return (
        <section className="grid gap-5 md:grid-cols-40/60 lg:gap-8">
            <picture>
                <source
                    media="(min-width:1024px)"
                    srcSet={props.firstImage.desktop}
                />
                <source
                    media="(min-width:768px)"
                    srcSet={props.firstImage.tablet}
                />
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={props.firstImage.mobile}
                    alt="Photo gallery"
                />
            </picture>
            <picture>
                <source
                    media="(min-width:1024px)"
                    srcSet={props.secondImage.desktop}
                />
                <source
                    media="(min-width:768px)"
                    srcSet={props.secondImage.tablet}
                />
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={props.secondImage.mobile}
                    alt="Photo gallery"
                />
            </picture>
            <picture className="md:row-start-1 md:row-span-2 md:col-start-2">
                <source
                    media="(min-width:1024px)"
                    srcSet={props.thirdImage.desktop}
                />
                <source
                    media="(min-width:768px)"
                    srcSet={props.thirdImage.tablet}
                />
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={props.thirdImage.mobile}
                    alt="Photo gallery"
                />
            </picture>
        </section>
    );
}
