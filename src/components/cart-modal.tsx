'use client';

import Image from 'next/image';

import { Button } from './button';
import { CartControl } from './cart-control';
import { CartItem } from './cart-item';
import { Modal } from './modal';

import iconCart from '@public/shared/svg/icon-cart.svg';
import { useCart } from 'contexts/cart-context';

export function CartModal() {
    const { cartItems, removeAll } = useCart();

    const cartHasItems = cartItems.length > 0;

    return (
        <Modal>
            <Modal.Trigger className="w-6 h-6 md:ml-auto lg:mx-0">
                <Image src={iconCart} alt="Cart Icon" />
            </Modal.Trigger>

            <Modal.Content className="absolute flex flex-col bg-default w-9/10 h-[30.5rem] top-28 z-50 py-8 rounded-lg md:w-96 md:right-[5%] lg:right-[10%]">
                {cartHasItems && (
                    <>
                        <div className="w-9/10 mx-auto">
                            <div className="flex justify-between mb-2 items-center">
                                <h6 className="text-h6 text-title uppercase">
                                    Cart ({cartItems.length})
                                </h6>
                                <span
                                    className="text-body text-title underline opacity-50"
                                    onClick={removeAll}
                                >
                                    Remove all
                                </span>
                            </div>
                            <section className="flex flex-col gap-6 mt-6 max-h-60">
                                {cartItems.map((cartItem) => {
                                    return (
                                        <CartItem
                                            key={cartItem.product.id}
                                            cartItem={cartItem}
                                        >
                                            <CartControl
                                                cartItem={cartItem.product}
                                                amount={cartItem.amount}
                                            />
                                        </CartItem>
                                    );
                                })}
                            </section>
                        </div>
                        <div className="w-9/10 mx-auto mt-auto flex justify-between">
                            <span className="text-body text-title uppercase opacity-50">
                                Total
                            </span>
                            <h6 className="text-h6 text-title uppercase">
                                {cartItems
                                    .reduce((total, cartItem) => {
                                        return (total +=
                                            cartItem.product.price *
                                            cartItem.amount);
                                    }, 0)
                                    .toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })}
                            </h6>
                        </div>
                        <div className="w-9/10 text-title-alt mt-6 mx-auto">
                            <Button url="/checkout" size="full">
                                Checkout
                            </Button>
                        </div>
                    </>
                )}

                {!cartHasItems && (
                    //TODO
                    <>
                        <h1>No items</h1>
                    </>
                )}
            </Modal.Content>
        </Modal>
    );
}
