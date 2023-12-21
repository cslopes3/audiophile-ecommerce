import { Logo } from './logo';
import { MenuLinks } from './menu-links';
import { SocialLinks } from './social-links';

export function Footer() {
    return (
        <footer className="bg-footer flex flex-col items-center gap-12 text-paragraph-alt pb-9 mx-auto max-w-desktop md:gap-8 md:pb-11">
            <div className="lg:w-4/5 w-9/10">
                <div className="mx-auto w-28 border-b-4 border-primary-default md:mx-0"></div>
            </div>
            <div className="w-9/10 md:mt-6 lg:w-4/5 lg:mt-16 lg:flex lg:justify-between">
                <Logo />
                <MenuLinks />
            </div>
            <div className="w-9/10 flex flex-col gap-12 text-body md:gap-20 md:flex-row md:flex-wrap lg:w-4/5">
                <p className="w-[95%] mx-auto text-center opacity-50 md:mx-0 md:text-start lg:w-[47%] lg:order-1">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We&apos;re a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </p>
                <p className="text-center opacity-50 md:text-start md:flex-grow lg:order-3 lg:flex-grow-0">
                    Copyright 2023. All Rights Reserved
                </p>
                <SocialLinks />
            </div>
        </footer>
    );
}
