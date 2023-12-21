import { ReactNode } from 'react';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-desktop">{children}</main>
            <Footer />
        </>
    );
}
