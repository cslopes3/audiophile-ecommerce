import { CartModal } from './cart-modal';
import { CategoryList } from './category-list';
import { HamburguerButtonMenu } from './hamburguer-button-menu';
import { Logo } from './logo';
import { MenuLinks } from './menu-links';
import { SmallDevicesMenu } from './small-devices-menu';

export function Header() {
    return (
        <header className="bg-header mx-auto max-w-desktop z-50 relative">
            <div className="flex items-center justify-center w-9/10 mx-auto py-8 lg:w-4/5 lg:justify-between">
                <HamburguerButtonMenu />
                <div className="flex justify-center items-center flex-grow md:flex-grow-0 md:ml-10 lg:ml-0">
                    <Logo />
                </div>
                <nav className="hidden lg:block">
                    <MenuLinks />
                </nav>
                <CartModal />
            </div>
            <div className="h-1 bg-header border-b border-white border-opacity-10 md:w-9/10 md:mx-auto lg:w-4/5"></div>
            <SmallDevicesMenu>
                <CategoryList />
            </SmallDevicesMenu>
        </header>
    );
}
