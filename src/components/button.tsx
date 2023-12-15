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

export type ButtonProps = ComponentProps<'button'> &
    VariantProps<typeof button>;

export function Button({ variant, ...props }: ButtonProps) {
    return <button {...props} className={button({ variant })} />;
}
