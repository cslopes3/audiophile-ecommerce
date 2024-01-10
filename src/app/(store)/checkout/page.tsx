import { CheckoutForm } from 'components/checkout/checkout-form';
import { GoBackLink } from 'components/go-back-link';
import { Summary } from 'components/summary';

export default function Checkout() {
    return (
        <div className="bg-default">
            <div className="w-9/10 mx-auto pt-4 pb-6 max-w-desktop sm:pt-12 lg:w-4/5 lg:pb-9 lg:pt-20">
                <GoBackLink />
            </div>
            <div className="w-9/10 mx-auto grid gap-8 max-w-desktop lg:w-4/5 lg:grid-cols-2/1">
                <CheckoutForm />
                <Summary />
            </div>
        </div>
    );
}
