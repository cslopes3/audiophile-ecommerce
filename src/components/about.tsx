interface AboutProps {
    isfullSize?: boolean;
}

export function About({ isfullSize }: AboutProps) {
    const width = isfullSize ? 'w-full' : 'w-9/10 lg:w-4/5';

    return (
        <section
            className={`${width} mx-auto my-32 flex flex-col gap-8 md:my-24 lg:flex-row-reverse`}
        >
            <picture className="w-full lg:w-2/4">
                <source
                    media="(min-width:1024px)"
                    srcSet="/desktop/shared/image-best-gear.jpg"
                />
                <source
                    media="(min-width:768px)"
                    srcSet="/tablet/shared/image-best-gear.jpg"
                />
                <img
                    className="rounded-lg w-full"
                    src="/mobile/shared/image-best-gear.jpg"
                    alt="Photo from a man using one headphone"
                />
            </picture>

            <div className="flex lg:w-2/4 lg:items-center">
                <div className="text-title">
                    <h2 className="w-9/10 mx-auto text-h4 text-center uppercase md:w-4/5 md:text-h2 lg:text-start lg:mx-0">
                        Bringing you the{' '}
                        <strong className="text-emphasis">best</strong> audio
                        gear
                    </h2>
                    <p className="w-[97%] mx-auto text-body text-center opacity-50 mt-8 md:w-5/6 lg:text-start lg:mx-0 lg:w-[79%]">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </section>
    );
}
