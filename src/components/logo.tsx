import Image from 'next/image';
import Link from 'next/link';

import logo from '@public/shared/svg/logo.svg';

export function Logo() {
    return (
        <Link href="/">
            <Image className="cursor-pointer w-36 h-6" src={logo} alt="" />
        </Link>
    );
}
