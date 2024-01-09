'use client';

import { useState } from 'react';

import { IncreaseDecreaseButton } from './increase-decrease-button';

import { useCart } from 'contexts/cart-context';

type CartItemType = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
};

type CartControlType = {
    cartItem: CartItemType;
    amount: number;
};

export function CartControl({ cartItem, amount }: CartControlType) {
    const { addToCart, removeFromCart } = useCart();
    const [count, setCount] = useState(amount ?? 0);

    function handleDecrease() {
        setCount(count - 1);
        removeFromCart(cartItem.id);
    }

    function handleIncrease() {
        setCount(count + 1);
        addToCart({
            product: cartItem,
            amount: 1,
        });
    }

    return (
        <IncreaseDecreaseButton
            count={count}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            variant="small"
        />
    );
}
