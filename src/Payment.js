import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'

function Payment() {
    const [{ basket, user, }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisable] = useState(true);
    const [clientSecret, setClientSecret ] = useState(true);

    //Generate special Stripe secret for payment
    useEffect(() => {
        const getClientSecret = async () => {
            const respone = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(respone.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
            event.preventDefault();
            setProcessing(true);

            //Client Secret for stripe payments


            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method:{
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => {
                //payment paymentIntent
                setSucceeded(true);
                setError(null)
                setProcessing(false)

                history.replaceState('/orders')
            })
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

                                <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>)}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                                </button>
                                </div>
                                {/*Handle card errors*/}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
