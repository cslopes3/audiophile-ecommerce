'use client';

import { useState } from 'react';

type IncreaseDecreaseButtonProps = {
    variant?: 'small';
};

export function IncreaseDecreaseButton({
    variant,
}: IncreaseDecreaseButtonProps) {
    const [count, setCount] = useState(1);
    let sizeClasses = 'h-12 w-[7.5rem]';

    if (variant === 'small') {
        sizeClasses = 'w-24 h-8';
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    function handleIncrease() {
        setCount(count + 1);
    }

    return (
        <div
            className={`flex items-center bg-neutral-default text-paragraph text-sub-title ${sizeClasses}`}
        >
            <button
                className="w-10 opacity-25 h-12 transition-all enabled:hover:text-emphasis enabled:hover:opacity-100"
                onClick={handleDecrease}
                disabled={count === 0}
            >
                -
            </button>
            <span className="w-10 text-center">{count}</span>
            <button
                className="w-10 opacity-25 h-12 transition-all hover:text-emphasis hover:opacity-100 "
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}
