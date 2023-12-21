'use client';

import Image from 'next/image';

import { Button } from './button';
import { IncreaseDecreaseButton } from './increase-decrease-button';
import { Modal } from './modal';

import iconCart from '@public/shared/svg/icon-cart.svg';

export function CartModal() {
    return (
        <Modal>
            <Modal.Trigger className="w-6 h-6 md:ml-auto lg:mx-0">
                <Image src={iconCart} alt="Cart Icon" />
            </Modal.Trigger>
            <Modal.Content className="absolute flex flex-col bg-default w-80 h-[30.5rem] top-28 z-50 py-8 rounded-lg md:w-96 md:right-[5%] lg:right-[10%]">
                <div className="w-9/10 mx-auto">
                    <div className="flex justify-between mb-2">
                        <h6 className="text-h6 text-title uppercase">
                            Cart (5)
                        </h6>
                        <span className="text-body text-title underline opacity-50">
                            Remove all
                        </span>
                    </div>
                    <section className="flex flex-col gap-6 mt-6 max-h-60 overflow-scroll">
                        <article className="flex gap-4 items-center">
                            <Image
                                className="rounded-lg"
                                src="/shared/cart/image-zx9-speaker.jpg"
                                alt=""
                                width={64}
                                height={64}
                            />
                            <div className="flex-grow">
                                <p className="text-h3-mobile text-paragraph">
                                    Produto
                                </p>
                                <p className="text-body text-paragraph opacity-50">
                                    $2.222
                                </p>
                            </div>
                            <IncreaseDecreaseButton variant="small" />
                        </article>

                        <article className="flex gap-4 items-center">
                            <Image
                                className="rounded-lg"
                                src="/shared/cart/image-zx9-speaker.jpg"
                                alt=""
                                width={64}
                                height={64}
                            />
                            <div className="flex-grow">
                                <p className="text-h3-mobile text-paragraph">
                                    Produto
                                </p>
                                <p className="text-body text-paragraph opacity-50">
                                    $2.222
                                </p>
                            </div>
                            <IncreaseDecreaseButton variant="small" />
                        </article>
                        <article className="flex gap-4 items-center">
                            <Image
                                className="rounded-lg"
                                src="/shared/cart/image-zx9-speaker.jpg"
                                alt=""
                                width={64}
                                height={64}
                            />
                            <div className="flex-grow">
                                <p className="text-h3-mobile text-paragraph">
                                    Produto
                                </p>
                                <p className="text-body text-paragraph opacity-50">
                                    $2.222
                                </p>
                            </div>
                            <IncreaseDecreaseButton variant="small" />
                        </article>
                        <article className="flex gap-4 items-center">
                            <Image
                                className="rounded-lg"
                                src="/shared/cart/image-zx9-speaker.jpg"
                                alt=""
                                width={64}
                                height={64}
                            />
                            <div className="flex-grow">
                                <p className="text-h3-mobile text-paragraph">
                                    Produto
                                </p>
                                <p className="text-body text-paragraph opacity-50">
                                    $2.222
                                </p>
                            </div>
                            <IncreaseDecreaseButton variant="small" />
                        </article>
                    </section>
                </div>
                <div className="w-9/10 mx-auto mt-auto flex justify-between">
                    <span className="text-body text-title uppercase opacity-50">
                        Total
                    </span>
                    <h6 className="text-h6 text-title uppercase">$9.999</h6>
                </div>
                <div className="w-9/10 text-title-alt mt-6 mx-auto">
                    <Button size="full">Checkout</Button>
                </div>
            </Modal.Content>
        </Modal>
    );
}

//488 h all
//327 w mobile
// 377 w others
