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
        <section className="flex flex-col gap-5 md:flex-row lg:gap-8">
            <div className="flex flex-col gap-5 lg:gap-8 lg:w-[41.26%]">
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
                        className="w-full rounded-lg"
                        src={props.firstImage.mobile}
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
                        className="w-full rounded-lg"
                        src={props.secondImage.mobile}
                    />
                </picture>
            </div>
            <picture className="lg:w-[58.74%]">
                <source
                    media="(min-width:1024px)"
                    srcSet={props.thirdImage.desktop}
                />
                <source
                    media="(min-width:768px)"
                    srcSet={props.thirdImage.tablet}
                />
                <img
                    className="w-full rounded-lg"
                    src={props.thirdImage.mobile}
                />
            </picture>
        </section>
    );
}
