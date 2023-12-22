type IncreaseDecreaseButtonProps = {
    count: number;
    onDecrease: () => void;
    onIncrease: () => void;
    variant?: 'small';
};

export function IncreaseDecreaseButton({
    count,
    onDecrease,
    onIncrease,
    variant,
}: IncreaseDecreaseButtonProps) {
    let sizeClasses = 'h-12 w-[7.5rem]';

    if (variant === 'small') {
        sizeClasses = 'w-24 h-8';
    }

    return (
        <div
            className={`flex items-center bg-neutral-default text-paragraph text-sub-title ${sizeClasses}`}
        >
            <button
                className="w-10 opacity-25 h-12 transition-all enabled:hover:text-emphasis enabled:hover:opacity-100"
                onClick={onDecrease}
                disabled={count === 0}
            >
                -
            </button>
            <span className="w-10 text-center">{count}</span>
            <button
                className="w-10 opacity-25 h-12 transition-all hover:text-emphasis hover:opacity-100 "
                onClick={onIncrease}
            >
                +
            </button>
        </div>
    );
}
