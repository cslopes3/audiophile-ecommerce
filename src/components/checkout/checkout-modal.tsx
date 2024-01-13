'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { CartItem } from 'components/cart-item';
import { Modal } from 'components/modal';

import iconOrderConfirmation from '@public/shared/svg/icon-order-confirmation.svg';
import { useCart } from 'contexts/cart-context';

type CheckoutModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function CheckoutModal({ open, onOpenChange }: CheckoutModalProps) {
    const { cartItems, removeAll } = useCart();
    const [itemsToShow, setItemsToShow] = useState(1);
    const modalCartItems = useRef(cartItems);

    const handleItemsToShow = () => {
        setItemsToShow(itemsToShow === 1 ? modalCartItems.current.length : 1);
    };

    const totalValue = modalCartItems.current.reduce((total, cartItem) => {
        return (total += cartItem.product.price * cartItem.amount);
    }, 0);

    const hasOnlyOneItem = modalCartItems.current.length === 1;

    useEffect(() => {
        if (open) {
            removeAll();
        }
    }, [open]);

    return (
        <>
            <Modal
                externalTrigger={true}
                open={open}
                onOpenChange={onOpenChange}
            >
                <Modal.Content className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-8 bg-default z-50 w-9/10 rounded-lg sm:w-[33.75rem] sm:p-12">
                    <section>
                        <Image src={iconOrderConfirmation} alt={''} />
                        <div className="my-6 sm:my-8">
                            <h5 className="text-h5 uppercase mb-4 sm:text-h3 sm:mb-6">
                                Thank you for your order
                            </h5>
                            <p className="text-body opacity-50">
                                You will receive an email confirmation shortly.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2/1">
                            <div className="bg-neutral-default rounded-t-lg p-6 md:rounded-tr-none md:rounded-bl-lg">
                                {modalCartItems.current
                                    .slice(0, itemsToShow)
                                    .map((cartItem) => {
                                        return (
                                            <CartItem
                                                key={cartItem.product.id}
                                                cartItem={cartItem}
                                            >
                                                <p className="text-h3-mobile text-paragraph opacity-50 self-start pt-2">
                                                    x{cartItem.amount}
                                                </p>
                                            </CartItem>
                                        );
                                    })}

                                {!hasOnlyOneItem && (
                                    <>
                                        <hr className="my-3" />
                                        <button
                                            className="w-full text-form-label opacity-50 text-center"
                                            onClick={handleItemsToShow}
                                        >
                                            {itemsToShow === 1
                                                ? `and ${
                                                      modalCartItems.current
                                                          .length - 1
                                                  } other item(s)`
                                                : 'View less'}
                                        </button>
                                    </>
                                )}
                            </div>
                            <div
                                className={`flex flex-col justify-center bg-black rounded-b-lg py-5 pl-6 md:rounded-bl-none md:rounded-tr-lg ${
                                    itemsToShow > 1
                                        ? 'sm:justify-end sm:pb-14'
                                        : ''
                                }`}
                            >
                                <p className="text-body text-title-alt opacity-50">
                                    Grand total
                                </p>
                                <p className="text-h6 text-title-alt">
                                    {(totalValue + 50).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })}
                                </p>
                            </div>
                        </div>

                        <Modal.Close className="w-full text-title-alt mt-6 h-12 uppercase text-sub-title block bg-primary-default transition-all sm:mt-11 hover:bg-primary-hover">
                            <Link className="w-full" href="/">
                                Teste
                            </Link>
                        </Modal.Close>
                    </section>
                </Modal.Content>
            </Modal>
        </>
    );
}
