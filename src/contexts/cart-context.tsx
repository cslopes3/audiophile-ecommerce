'use client';

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

type ProductType = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
};

type CartItemsType = {
    product: ProductType;
    amount: number;
};

type CartContextType = {
    cartItems: CartItemsType[];
    addToCart: ({ product, amount }: CartItemsType) => void;
    removeFromCart: (productId: string) => void;
    removeAll: () => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
    const initialLoadComplete = useRef(false);
    const [cartItems, setCartItems] = useState<CartItemsType[]>([]);

    useEffect(() => {
        if (!initialLoadComplete.current) {
            const storageItems = localStorage.getItem('cartItems');
            console.log(storageItems);
            if (storageItems) {
                setCartItems(JSON.parse(storageItems!));
            }
            initialLoadComplete.current = true;
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart({ product, amount }: CartItemsType) {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.product.id === product.id,
        );

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.product.id === product.id
                        ? { ...cartItem, amount: cartItem.amount + amount }
                        : cartItem,
                ),
            );
        } else {
            product.name = product.name.replace(
                /Headphones|Earphones|Speaker/g,
                '',
            );
            setCartItems([...cartItems, { product, amount }]);
        }
    }

    function removeFromCart(productId: string) {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.product.id === productId,
        );

        if (isItemInCart) {
            if (isItemInCart.amount === 1) {
                setCartItems(
                    cartItems.filter(
                        (cartItem) =>
                            cartItem.product.id !== isItemInCart.product.id,
                    ),
                );
            } else {
                setCartItems(
                    cartItems.map((cartItem) =>
                        cartItem.product.id === isItemInCart.product.id
                            ? { ...cartItem, amount: cartItem.amount - 1 }
                            : cartItem,
                    ),
                );
            }
        }
    }

    function removeAll() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, removeAll }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
