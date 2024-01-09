'use client';

import { Button } from './button';
import { CartItem } from './cart-item';

import { useCart } from 'contexts/cart-context';

export function Summary() {
    const { cartItems } = useCart();

    const totalValue = cartItems.reduce((total, cartItem) => {
        return (total += cartItem.product.price * cartItem.amount);
    }, 0);

    return (
        <div className="px-6 py-8 bg-white rounded-lg h-min">
            <h6 className="text-h6 pb-8">Summary</h6>
            <section className="flex flex-col gap-6 max-h-60">
                {cartItems.map((cartItem) => {
                    return (
                        <CartItem key={cartItem.product.id} cartItem={cartItem}>
                            <p className="text-h3-mobile text-paragraph opacity-50 self-start pt-2">
                                x{cartItem.amount}
                            </p>
                        </CartItem>
                    );
                })}
            </section>
            <div className="mt-8 flex justify-between">
                <span className="text-body text-title uppercase opacity-50">
                    Total
                </span>
                <h6 className="text-h6 text-title uppercase">
                    {totalValue.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </h6>
            </div>
            <div className="mt-2 flex justify-between">
                <span className="text-body text-title uppercase opacity-50">
                    Shipping
                </span>
                <h6 className="text-h6 text-title uppercase">$ 50</h6>
            </div>
            <div className="mt-2 flex justify-between">
                <span className="text-body text-title uppercase opacity-50">
                    VAT (Included)
                </span>
                <h6 className="text-h6 text-title uppercase">
                    {((totalValue * 20) / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </h6>
            </div>
            <div className="mt-6 flex justify-between">
                <span className="text-body text-title uppercase opacity-50">
                    Grand total
                </span>
                <h6 className="text-h6 uppercase text-emphasis">
                    {(totalValue + 50).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </h6>
            </div>

            <div className="w-full text-title-alt mt-8">
                <Button form="checkout" type="submit" size="full">
                    Continue & pay
                </Button>
            </div>
        </div>
    );
}
