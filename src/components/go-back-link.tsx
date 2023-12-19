'use client';

import { useRouter } from 'next/navigation';

export function GoBackLink() {
    const router = useRouter();

    return (
        <button
            type="button"
            className="text-body text-title opacity-50 transition-all hover:text-emphasis hover:opacity-100"
            onClick={() => router.back()}
        >
            Go Back
        </button>
    );
}
