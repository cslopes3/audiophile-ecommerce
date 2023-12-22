'use client';

import { useState } from 'react';

import { Button } from './button';
import { IncreaseDecreaseButton } from './increase-decrease-button';

import { useCart } from 'contexts/cart-context';

type ProductControlsType = {
    id: string;
    name: string;
    price: number;
};

export function ProductControls(props: ProductControlsType) {
    const { addToCart } = useCart();
    const [count, setCount] = useState(1);

    function handleDecrease() {
        setCount(count - 1);
    }

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleCLick() {
        addToCart({
            product: {
                id: props.id,
                name: props.name,
                price: props.price,
            },
            amount: count,
        });
    }

    return (
        <>
            <div className="flex gap-4 text-title-alt">
                <IncreaseDecreaseButton
                    count={count}
                    onDecrease={handleDecrease}
                    onIncrease={handleIncrease}
                />
                <Button onClick={handleCLick}>Add to Cart</Button>
            </div>
        </>
    );
}
