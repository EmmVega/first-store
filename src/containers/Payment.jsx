import React , {useContext} from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';
import {handleSumTotal} from '../utils/utils';
import { useHistory} from 'react-router-dom'



const Payment = () => {
    const {state, addNewOrder} = useContext(AppContext);
    const {cart, buyer} = state;
    const history = useHistory();

    const paypalOptions = {
        clientId: 'sb',
        intent: 'capture',
        currency: 'mxn'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        console.log(data)
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    return (
        <div className='Payment'>
            <div className="payment-content">
                <h3>Resumen del pedido</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        // onPaymentStart={() => console.log('Start payment')}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                        />
                </div>
            </div>
            <div/>
        </div>
    )
}

export default Payment
