'use client';

import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { manrope } from '@public/styles/fonts';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
    base: `${manrope.className} w-40 h-12 uppercase text-sub-title`,
    variants: {
        variant: {
            primary:
                'block bg-primary-default transition-all hover:bg-primary-hover',
            secondary: 'block bg-black transition-all hover:bg-neutral-hover',
            outline:
                'border-2 border-solid border-black transition-all hover:bg-black hover:text-title-alt',
        },
    },

    defaultVariants: {
        variant: 'primary',
    },
});

type ButtonType = {
    url?: string;
};

export type ButtonProps = ComponentProps<'button'> &
    VariantProps<typeof button> &
    ButtonType;

export function Button({ variant, url, ...props }: ButtonProps) {
    const router = useRouter();

    return (
        <>
            {url ? (
                <button
                    {...props}
                    className={button({ variant })}
                    onClick={() => router.push(url)}
                />
            ) : (
                <button {...props} className={button({ variant })} />
            )}
        </>
    );
}
