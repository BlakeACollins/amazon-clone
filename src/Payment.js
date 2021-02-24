import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user, }, dispatch] = useStateValue();


    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);

    const handleSubmit = e => {

    }

    const handleChange = e =>{
        setDisable(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout(<Link to='/checkout'>{basket?.lenght}items</Link>)
                </h1>
                {/*Payment section - delivery address*/ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='paymeny__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Seattle, WA</p>
                    </div>
                </div>

                {/*Payment section - Review items*/ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review products in your baskets</h3>
                    </div>
                    <div className='payment__items'>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                    </div>
                </div>


                {/*Payment section - payment method*/ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
