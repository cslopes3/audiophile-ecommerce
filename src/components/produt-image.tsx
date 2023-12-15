import Image, { ImageProps } from 'next/image';

import { tv, VariantProps } from 'tailwind-variants';

export const image = tv({
    base: 'absolute',
    variants: {
        variant: {
            headphone: 'w-36 lg:w-56',
            speaker: 'w-40 lg:w-56',
            earphone: 'w-44 lg:w-60',
        },
    },

    defaultVariants: {
        variant: 'headphone',
    },
});

export type ProductImageProps = ImageProps & VariantProps<typeof image>;

export function ProductImage({ variant, ...props }: ProductImageProps) {
    return <Image {...props} className={image({ variant })} />;
}
