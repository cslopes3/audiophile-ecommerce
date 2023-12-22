'use client';

import { ReactNode } from 'react';

import { CartProvider } from 'contexts/cart-context';
import { SmallDeviceProvider } from 'contexts/small-devices-menu-context';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            <SmallDeviceProvider>{children}</SmallDeviceProvider>
        </CartProvider>
    );
}
