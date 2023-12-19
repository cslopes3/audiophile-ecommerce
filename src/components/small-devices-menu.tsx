'use client';

import { ReactNode } from 'react';

import { useSmallDevicesMenu } from 'context/small-devices-menu-context';

export function SmallDevicesMenu({ children }: { children: ReactNode }) {
    const { showMenu, controledEnabledMenu } = useSmallDevicesMenu();

    function handleMenu() {
        controledEnabledMenu();
    }

    return (
        <>
            {showMenu && (
                <>
                    <div className="absolute w-full bg-default top-20 z-10 md:top-30">
                        <nav className="w-9/10 mx-auto relative py-8 md:pb-14">
                            {children}
                        </nav>
                    </div>
                    <div
                        className="fixed inset-0 -z-10 w-full bg-black opacity-80"
                        onClick={handleMenu}
                    ></div>
                </>
            )}
        </>
    );
}
