'use client';

import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { manrope } from '@public/styles/fonts';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
    base: `${manrope.className} h-12 uppercase text-sub-title`,
    variants: {
        variant: {
            primary:
                'block bg-primary-default transition-all hover:bg-primary-hover',
            secondary: 'block bg-black transition-all hover:bg-neutral-hover',
            outline:
                'border-2 border-solid border-black transition-all hover:bg-black hover:text-title-alt',
        },
        size: {
            normal: 'w-40',
            full: 'w-full',
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'normal',
    },
});

type ButtonType = {
    url?: string;
};

type ButtonProps = ComponentProps<'button'> &
    VariantProps<typeof button> &
    ButtonType;

export function Button({ variant, size, url, ...props }: ButtonProps) {
    const router = useRouter();

    return (
        <>
            {url ? (
                <button
                    {...props}
                    className={button({ variant, size })}
                    onClick={() => router.push(url)}
                />
            ) : (
                <button {...props} className={button({ variant, size })} />
            )}
        </>
    );
}
