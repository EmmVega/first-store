import React, { useContext, useRef } from 'react'
import '../styles/components/Information.css';
import { Link , useHistory} from 'react-router-dom'
import { AppContext } from '../context/AppContext';



const Information = () => {
  const {state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const {cart} = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name':formData.get('name'),
      'email':formData.get('email'),
      'apto':formData.get('apto'),
      'city':formData.get('city'),
      'country':formData.get('country'),
      'state':formData.get('state'),
      'CP':formData.get('CP'),
      'phone':formData.get('phone'),
    }
    addToBuyer(buyer);
    history.push('/checkout/payment');
  }
    return (
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electrónico"
                name="email"
              />
              <input type="text" placeholder="Dirección" name="adress" />
              <input type="text" placeholder="Apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="País " name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Código Postal" name="CP" />
              <input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type='button' onClick={handleSubmit}>Pagar</button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.title}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Information
