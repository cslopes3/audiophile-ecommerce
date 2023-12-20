import Image from 'next/image';
import { ReactNode } from 'react';

import { CategoryList } from 'components/category-list';
import { HamburguerButtonMenu } from 'components/hamburguer-button-menu';
import { Logo } from 'components/logo';
import { MenuLinks } from 'components/menu-links';
import { SmallDevicesMenu } from 'components/small-devices-menu';
import { SocialLinks } from 'components/social-links';

import iconCart from '@public/shared/svg/icon-cart.svg';
import { SmallDeviceProvider } from 'context/small-devices-menu-context';

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <header className="bg-header mx-auto max-w-desktop z-50 relative">
                <SmallDeviceProvider>
                    <div className="flex items-center justify-center w-9/10 mx-auto py-8 lg:w-4/5 lg:justify-between">
                        <HamburguerButtonMenu />
                        <div className="flex justify-center items-center flex-grow md:flex-grow-0 md:ml-10 lg:ml-0">
                            <Logo />
                        </div>
                        <nav className="hidden lg:block">
                            <MenuLinks />
                        </nav>
                        <Image
                            className="w-6 h-6 md:ml-auto lg:mx-0"
                            src={iconCart}
                            alt="Cart Icon"
                        />
                    </div>
                    <div className="h-1 bg-header border-b border-white border-opacity-10 md:w-9/10 md:mx-auto lg:w-4/5"></div>
                    <SmallDevicesMenu>
                        <CategoryList />
                    </SmallDevicesMenu>
                </SmallDeviceProvider>
            </header>
            <main className="mx-auto max-w-desktop">{children}</main>
            <footer className="bg-footer flex flex-col items-center gap-12 text-paragraph-alt pb-9 mx-auto max-w-desktop md:gap-8 md:pb-11">
                <div className="lg:w-4/5 w-9/10">
                    <div className="mx-auto w-28 border-b-4 border-primary-default md:mx-0"></div>
                </div>
                <div className="w-9/10 md:mt-6 lg:w-4/5 lg:mt-16 lg:flex lg:justify-between">
                    <div className="mx-auto md:mx-0">
                        <Logo />
                    </div>
                    <MenuLinks />
                </div>
                <div className="w-9/10 flex flex-col gap-12 text-body md:gap-20 md:flex-row md:flex-wrap lg:w-4/5">
                    <p className="w-[95%] mx-auto text-center opacity-50 md:mx-0 md:text-start lg:w-[47%] lg:order-1">
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We&apos;re a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </p>
                    <p className="text-center opacity-50 md:text-start md:flex-grow lg:order-3 lg:flex-grow-0">
                        Copyright 2023. All Rights Reserved
                    </p>
                    <SocialLinks />
                </div>
            </footer>
        </>
    );
}
