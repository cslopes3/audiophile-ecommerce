import { CheckoutForm } from 'components/checkout/checkout-form';
import { Summary } from 'components/summary';

export default function Checkout() {
    return (
        <div className="bg-default">
            {/* <div className="w-9/10 mx-auto grid gap-8 max-w-desktop lg:w-4/5 lg:grid-cols-auto"> */}
            <div className="w-9/10 mx-auto grid gap-8 max-w-desktop lg:w-4/5 lg:grid-cols-2/1">
                <CheckoutForm />
                <Summary />
            </div>
        </div>
    );
}
