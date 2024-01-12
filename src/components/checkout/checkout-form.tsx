'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CheckoutField } from './checkout-field';
import { CheckoutModal } from './checkout-modal';

import { zodResolver } from '@hookform/resolvers/zod';
import cashOnDeliveryIcon from '@public/shared/svg/icon-cash-on-delivery.svg';
import { z } from 'zod';

const checkoutSchema = z
    .object({
        name: z.string().min(1, 'Required Field'),
        email: z.string().email(),
        phone: z
            .string()
            .min(1, 'Required Field')
            .refine((value) => /^\d{0,10}$/.test(value), {
                message: 'Wrong format',
            }),
        address: z.string().min(1, 'Required Field'),
        zipCode: z
            .string()
            .min(1, 'Required Field')
            .refine((value) => /^(?:\d{5}|\d{9})$/.test(value), {
                message: 'Wrong format',
            }),
        city: z.string().min(1, 'Required Field'),
        country: z.string().min(1, 'Required Field'),
        paymentMethod: z.string(),
        eMoneyNumber: z.string(),
        eMoneyPin: z.string(),
    })
    .refine(
        (data) =>
            !(data.paymentMethod === 'e-money' && data.eMoneyNumber === ''),
        {
            message: 'Required Field',
            path: ['eMoneyNumber'],
        },
    )
    .refine(
        (data) => !(data.paymentMethod === 'e-money' && data.eMoneyPin === ''),
        {
            message: 'Required Field',
            path: ['eMoneyPin'],
        },
    );

type CheckoutSchema = z.infer<typeof checkoutSchema>;

export function CheckoutForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<CheckoutSchema>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            paymentMethod: 'e-money',
        },
    });

    const [open, setOpen] = useState(false);

    const watchPaymentMethod = watch('paymentMethod');

    const onSubmit = () => {
        reset();
        setOpen(true);
    };

    return (
        <>
            <form
                id="checkout"
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg sm:px-7 lg:px-12 lg:pt-12"
            >
                <legend className="text-h4 uppercase sm:text-h3 pb-6 sm:pb-10">
                    Checkout
                </legend>
                <legend className="text-sub-title uppercase text-emphasis mb-4">
                    Billing Details
                </legend>
                <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div className="grid gap-y-2">
                        <CheckoutField
                            inputText="Name"
                            inputId="name"
                            error={errors.name}
                            register={{ ...register('name') }}
                        />
                    </div>
                    <div className="grid gap-y-2">
                        <CheckoutField
                            inputText="Email Address"
                            inputId="email"
                            error={errors.email}
                            register={{ ...register('email') }}
                        />
                    </div>
                    <div className="grid gap-y-2">
                        <CheckoutField
                            inputText="Phone Number"
                            inputId="phone"
                            error={errors.phone}
                            register={{ ...register('phone') }}
                        />
                    </div>
                </div>

                <legend className="text-sub-title uppercase text-emphasis mb-4 mt-12">
                    Shipping Info
                </legend>
                <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div className="grid gap-y-2 sm:col-span-2">
                        <CheckoutField
                            inputText="Your Address"
                            inputId="address"
                            error={errors.address}
                            register={{ ...register('address') }}
                        />
                    </div>
                    <div className="grid gap-y-2">
                        <CheckoutField
                            inputText="ZIP Code"
                            inputId="zipCode"
                            error={errors.zipCode}
                            register={{ ...register('zipCode') }}
                        />
                    </div>
                    <div className="grid gap-y-2">
                        <CheckoutField
                            inputText="City"
                            inputId="city"
                            error={errors.city}
                            register={{ ...register('city') }}
                        />
                    </div>
                    <div className="grid gap-y-2">
                        <CheckoutField
                            inputText="Country"
                            inputId="country"
                            error={errors.country}
                            register={{ ...register('country') }}
                        />
                    </div>
                </div>

                <legend className="text-sub-title uppercase text-emphasis mb-4 mt-12">
                    Payment Details
                </legend>

                <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                    <p className="text-form-label text-paragraph">
                        Payment Method
                    </p>
                    <label
                        className={`flex gap-4 border border-solid border-[#CFCFCF] p-4 rounded-lg cursor-pointer text-form-input text-paragraph
                            ${
                                watchPaymentMethod === 'e-money'
                                    ? 'border-primary-default'
                                    : ''
                            }`}
                        htmlFor="e-money"
                    >
                        <input
                            className="appearance-none w-5 h-5 border border-solid border-black border-opacity-50 rounded-full checked:bg-gradient-orange-radial"
                            {...register('paymentMethod')}
                            type="radio"
                            value="e-money"
                            id="e-money"
                        />
                        e-Money
                    </label>

                    <label
                        className={`flex gap-4 border border-solid border-[#CFCFCF] p-4 rounded-lg cursor-pointer text-form-input text-paragraph sm:col-start-2 
                            ${
                                watchPaymentMethod === 'cash'
                                    ? 'border-primary-default'
                                    : ''
                            }`}
                        htmlFor="cash"
                    >
                        <input
                            className="appearance-none w-5 h-5 border border-solid border-black border-opacity-50 rounded-full checked:bg-gradient-orange-radial"
                            {...register('paymentMethod')}
                            type="radio"
                            value="cash"
                            id="cash"
                        />
                        Cash on Delivery
                    </label>

                    {watchPaymentMethod === 'e-money' && (
                        <>
                            <div className="grid gap-y-2">
                                <CheckoutField
                                    inputText="e-Money Number"
                                    inputId="e-money-number"
                                    error={errors.eMoneyNumber}
                                    register={{ ...register('eMoneyNumber') }}
                                />
                            </div>
                            <div className="grid gap-y-2">
                                <CheckoutField
                                    inputText="e-Money Pin"
                                    inputId="e-money-pin"
                                    error={errors.eMoneyPin}
                                    register={{ ...register('eMoneyPin') }}
                                />
                            </div>
                        </>
                    )}
                </div>
                {watchPaymentMethod === 'cash' && (
                    <div className="grid grid-cols-auto gap-8 mt-4">
                        <Image
                            src={cashOnDeliveryIcon}
                            width={48}
                            height={48}
                            alt=""
                        />

                        <p>
                            The ‘Cash on Delivery’ option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                        </p>
                    </div>
                )}
            </form>
            <CheckoutModal open={open} onOpenChange={setOpen} />
        </>
    );
}
