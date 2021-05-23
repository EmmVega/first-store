import React, { useContext } from 'react'
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Checkout = () => {
    const {state, removeFromCart} = useContext(AppContext);
    const {cart} = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    }

    const handleSumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>Lista de pedidos:</h3>
          <div className="Checkout-item">
              {/* {cart.reduce} */}
            {cart.map( product => ( 
              <div className='Checkout-line' key={product.id}>
                <div className="Checkout-element" >
                    <h4>{product.title}</h4>
                  <span>${product.price}</span>
                </div>
                <button type="button" onClick={handleRemove(product)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </div>
      </div>
    );
}

export default Checkout
