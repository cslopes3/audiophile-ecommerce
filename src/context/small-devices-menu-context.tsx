'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface SmallDeviceContextType {
    showMenu: boolean;
    controledEnabledMenu: () => void;
}

const SmallDeviceContext = createContext({} as SmallDeviceContextType);

export function SmallDeviceProvider({ children }: { children: ReactNode }) {
    const [showMenu, setShowMenu] = useState(false);

    function controledEnabledMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <SmallDeviceContext.Provider value={{ showMenu, controledEnabledMenu }}>
            {children}
        </SmallDeviceContext.Provider>
    );
}

export const useSmallDevicesMenu = () => useContext(SmallDeviceContext);
