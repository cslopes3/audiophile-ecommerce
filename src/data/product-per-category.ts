interface Product {
    id: string;
    name: string;
    text: string;
    mobileImageUrl: string;
    tabletImageUrl: string;
    desktopImageUrl: string;
    newProduct: boolean;
}

interface Products {
    [categoryType: string]: Product[];
}

export const products: Products = {
    headphones: [
        {
            id: '1',
            name: 'XX99 Mark II Headphones',
            text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            mobileImageUrl: '/mobile/category/image-x99-mark-two-preview.jpg',
            tabletImageUrl: '/tablet/category/image-x99-mark-two-preview.jpg',
            desktopImageUrl: '/desktop/category/image-x99-mark-two-preview.jpg',
            newProduct: true,
        },
        {
            id: '2',
            name: 'XX99 Mark I Headphones',
            text: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            mobileImageUrl: '/mobile/category/image-x99-mark-one-preview.jpg',
            tabletImageUrl: '/tablet/category/image-x99-mark-one-preview.jpg',
            desktopImageUrl: '/desktop/category/image-x99-mark-one-preview.jpg',
            newProduct: false,
        },
        {
            id: '3',
            name: 'XX59 Headphones',
            text: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
            mobileImageUrl: '/mobile/category/image-xx59-preview.jpg',
            tabletImageUrl: '/tablet/category/image-xx59-preview.jpg',
            desktopImageUrl: '/desktop/category/image-xx59-preview.jpg',
            newProduct: false,
        },
    ],
    speakers: [
        {
            id: '4',
            name: 'ZX9 SPEAKER',
            text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
            mobileImageUrl: '/mobile/category/image-zx9-speaker-preview.jpg',
            tabletImageUrl: '/tablet/category/image-zx9-speaker-preview.jpg',
            desktopImageUrl: '/desktop/category/image-zx9-speaker-preview.jpg',
            newProduct: true,
        },
        {
            id: '5',
            name: 'ZX7 SPEAKER',
            text: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
            mobileImageUrl: '/mobile/category/image-zx7-speaker-preview.jpg',
            tabletImageUrl: '/tablet/category/image-zx7-speaker-preview.jpg',
            desktopImageUrl: '/desktop/category/image-zx7-speaker-preview.jpg',
            newProduct: false,
        },
    ],
    earphones: [
        {
            id: '6',
            name: 'YX1 WIRELESS EARPHONES',
            text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
            mobileImageUrl: '/mobile/category/image-yx1-earphone-preview.jpg',
            tabletImageUrl: '/tablet/category/image-yx1-earphone-preview.jpg',
            desktopImageUrl: '/desktop/category/image-yx1-earphone-preview.jpg',
            newProduct: true,
        },
    ],
};
