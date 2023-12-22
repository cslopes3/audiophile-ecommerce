import { ReactNode } from 'react';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import { Providers } from 'providers/providers';

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Providers>
                <Header />
                <main className="mx-auto max-w-desktop">{children}</main>
                <Footer />
            </Providers>
        </>
    );
}
