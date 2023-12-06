import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

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
