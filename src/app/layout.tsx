import type { Metadata } from 'next';

import './globals.css';
import { manrope } from '@public/styles/fonts';

export const metadata: Metadata = {
    title: 'Audiophile Ecommerce',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.className}>{children}</body>
        </html>
    );
}
