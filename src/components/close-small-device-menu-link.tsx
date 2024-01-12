'use client';

import Link from 'next/link';

import { useSmallDevicesMenu } from 'contexts/small-devices-menu-context';

type CloseSmallDeviceMenuLinkType = {
    productName: string;
};

export function CloseSmallDeviceMenuLink({
    productName,
}: CloseSmallDeviceMenuLinkType) {
    const { controledEnabledMenu } = useSmallDevicesMenu();

    function handleMenu() {
        controledEnabledMenu();
    }

    return (
        <Link
            className="uppercase text-sub-title text-title opacity-50 transition-all hover:text-emphasis hover:opacity-100"
            href={`/${productName.toLowerCase()}`}
            onClick={handleMenu}
            replace
        >
            Shop
        </Link>
    );
}
