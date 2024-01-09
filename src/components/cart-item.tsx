import Image from 'next/image';
import { ReactNode } from 'react';

type ProductType = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
};

type ItemType = {
    product: ProductType;
    amount: number;
};

type CartItemType = {
    cartItem: ItemType;
    children: ReactNode;
};

export function CartItem({ cartItem, children }: CartItemType) {
    return (
        <article key={cartItem.product.id} className="flex gap-4 items-center">
            <Image
                className="rounded-lg"
                src={cartItem.product.imageUrl}
                alt=""
                width={64}
                height={64}
            />
            <div className="flex-grow">
                <p className="text-h3-mobile text-paragraph">
                    {cartItem.product.name}
                </p>
                <p className="text-body text-paragraph opacity-50">
                    {cartItem.product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </p>
            </div>
            {children}
        </article>
    );
}
