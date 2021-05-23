import React, { useContext } from 'react'
import '../styles/components/Success.css';
import {AppContext} from '../context/AppContext';
import Map from '../containers/Map';
import useGoogleAdress from '../hooks/useGoogleAdress';


const Success = () => {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    const address = useGoogleAdress(buyer[0].address);


    return (
        <div className='Success'>
            <div className="Success-content">
                <h2>{`${buyer.name}`} , gracias por tu compra</h2>
                <span>Tu pedido llegará a 3 días a tu dirección</span>
                <div className="Success-map">
                <Map data={address}/> 
                </div>
            </div>
        </div>
    )
}

export default Success
