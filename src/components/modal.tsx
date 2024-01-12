'use client';

import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

type ModalProps = {
    externalTrigger?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
};

export function Modal({
    externalTrigger,
    open,
    onOpenChange,
    children,
}: ModalProps) {
    return (
        <>
            {!externalTrigger ? (
                <Dialog.Root>
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 z-50" />
                    {children}
                </Dialog.Root>
            ) : (
                <Dialog.Root open={open} onOpenChange={onOpenChange}>
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 z-50" />
                    {children}
                </Dialog.Root>
            )}
        </>
    );
}

Modal.Trigger = Dialog.Trigger;
Modal.Content = Dialog.Content;
Modal.Close = Dialog.Close;
