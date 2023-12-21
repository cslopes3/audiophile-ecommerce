import { About } from 'components/about';
import { Button } from 'components/button';
import { CategoryList } from 'components/category-list';
import { CirclesPattern } from 'components/circles-pattern';

export default function Home() {
    return (
        <>
            <div className="relative -top-24 w-full max-w-desktop -mb-24">
                <picture>
                    <source
                        media="(min-width:1024px)"
                        srcSet="/desktop/home/hero.jpg"
                    />
                    <source
                        media="(min-width:768px)"
                        srcSet="/tablet/home/hero.jpg"
                    />
                    <img
                        className="w-full"
                        src="/mobile/home/hero.jpg"
                        alt="hero image from a new product"
                    />
                </picture>

                <div className="absolute text-title-alt top-1/3 w-full lg:w-4/5 lg:flex lg:mx-auto">
                    <div className="flex flex-col mx-auto w-3/4">
                        <h2 className="text-center text-overline opacity-50 uppercase lg:text-start">
                            New product
                        </h2>
                        <h1 className="mx-auto mt-4 text-h1-mobile text-center uppercase max-w-xs md:text-h1 md:max-w-md lg:text-start lg:mx-0">
                            XX99 Mark II Headphones
                        </h1>
                        <p className="mx-auto my-6 text-center text-body opacity-75 max-w-xs lg:text-start lg:mx-0 lg:max-w-[22rem]">
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                        <div className="mx-auto lg:mx-0">
                            <Button url="headphones/xx99-mark-two-headphones">
                                See Product
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-9/10 mx-auto mt-6 md:mt-20 lg:w-4/5 lg:mt-28">
                <CategoryList />
            </div>
            <section className="w-9/10 mx-auto flex items-center flex-col justify-center mt-28 gap-6 md:gap-8 lg:w-4/5 lg:mt-40 lg:gap-12">
                <div className="relative flex items-center flex-col justify-center text-title-alt pb-14 w-full bg-primary-default rounded-lg overflow-hidden lg:flex-row lg:justify-evenly">
                    <picture className="z-10">
                        <source
                            media="(min-width:1024px)"
                            srcSet="/desktop/home/image-speaker-zx9.png"
                        />
                        <img
                            className="pt-14 w-40 md:w-44 lg:w-[22.5rem] lg:relative lg:-bottom-[4.250rem]"
                            src="/shared/no-background/image-speaker-zx9.png"
                            alt="Speaker zx9 image"
                        />
                    </picture>
                    <CirclesPattern />

                    <div className="flex flex-col items-center gap-6 mt-10 md:mt-20 z-10 lg:items-start">
                        <h2 className="text-h1-mobile uppercase text-center px-10 max-w-xs md:text-h1 lg:text-start lg:px-0">
                            ZX9 speaker
                        </h2>
                        <p className="text-body text-paragraph-alt opacity-75 text-center px-2 max-w-xs md:px-0 md:mb-4 lg:text-start">
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <Button variant="secondary" url="speakers/zx9-speaker">
                            See Product
                        </Button>
                    </div>
                </div>

                <div className="bg-speaker w-full rounded-lg bg-no-repeat bg-cover h-80 flex flex-col items-center justify-center md:bg-speaker-tablet lg:bg-speaker-desktop">
                    <div className="w-5/6 text-title md:w-4/5 lg:w-5/6">
                        <h2 className="text-h4 uppercase mb-8">ZX7 speaker</h2>
                        <Button variant="outline" url="speakers/zx7-speaker">
                            See Product
                        </Button>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6 md:justify-between md:flex-row md:gap-3">
                    <picture className="md:w-2/4">
                        <source
                            media="(min-width:1024px)"
                            srcSet="/desktop/home/image-earphones-yx1.jpg"
                        />
                        <source
                            media="(min-width:768px)"
                            srcSet="/tablet/home/image-earphones-yx1.jpg"
                        />
                        <img
                            className="rounded-lg"
                            src="/mobile/home/image-earphones-yx1.jpg"
                            alt="Earphone yx1 image"
                        />
                    </picture>

                    <div className="flex bg-neutral-default justify-center rounded-lg text-title py-10 md:py-0 md:w-2/4 md:items-center">
                        <div className="w-5/6 text-title md:w-4/5 lg:w-2/3">
                            <h2 className="text-h4 uppercase mb-7">
                                YX1 earphones
                            </h2>
                            <Button
                                variant="outline"
                                url="earphones/yx1-earphones"
                            >
                                See Product
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
}
