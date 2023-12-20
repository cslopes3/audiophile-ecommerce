'use client';

import Image from 'next/image';

import iconHamburger from '@public/shared/svg/icon-hamburger.svg';
import iconX from '@public/shared/svg/icon-x.svg';
import { useSmallDevicesMenu } from 'context/small-devices-menu-context';

export function HamburguerButtonMenu() {
    const { showMenu, controledEnabledMenu } = useSmallDevicesMenu();

    function handleMenu() {
        controledEnabledMenu();
    }

    return (
        <>
            {showMenu ? (
                <Image
                    className="w-5 h-4 lg:hidden"
                    src={iconX}
                    alt="Close menu icon"
                    onClick={handleMenu}
                />
            ) : (
                <Image
                    className="w-5 h-4 lg:hidden"
                    src={iconHamburger}
                    alt="Menu icon"
                    onClick={handleMenu}
                />
            )}
        </>
    );
}
