'use client';

import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

export function Modal({ children }: { children: ReactNode }) {
    return (
        <Dialog.Root>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 z-50" />
            {children}
        </Dialog.Root>
    );
}

Modal.Trigger = Dialog.Trigger;
Modal.Content = Dialog.Content;
Modal.Close = Dialog.Close;
