import Link from 'next/link';

export function MenuLinks() {
    return (
        <>
            <ul className="text-title-alt text-center mt-12 flex flex-col gap-4 text-sub-title uppercase md:flex-row md:gap-8 lg:mt-0 lg:gap-10">
                <li className="transition-all hover:text-emphasis">
                    <Link href="/">Home</Link>
                </li>
                <li className="transition-all hover:text-emphasis">
                    <Link href="/headphones" replace>
                        Headphones
                    </Link>
                </li>
                <li className="transition-all hover:text-emphasis">
                    <Link href="/speakers" replace>
                        Speakers
                    </Link>
                </li>
                <li className="transition-all hover:text-emphasis">
                    <Link href="/earphones" replace>
                        Earphones
                    </Link>
                </li>
            </ul>
        </>
    );
}
