import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="text-h1">404</h1>
            <p className="px-10 max-w-xl text-body text-center">
                Sorry we couldn&apos;t find this page. But don&apos;t worry, you
                can find more things on our{' '}
                <Link href="/" className="text-emphasis">
                    homepage
                </Link>
            </p>
        </div>
    );
}
