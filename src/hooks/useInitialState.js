import React, { useEffect, useState } from 'react';
import initialState from '../initialState';
import axios from 'axios';
const API = 'http://localhost:1337/products';


const useInitalState = () => {
    const [state, setState] = useState(initialState);
    const [products, setProducts] = useState([]);

    useEffect (()=> {
        const getData = async () => {
            const response = await axios(API);
            setProducts(response.data)
        }
        getData();
    },[])

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id != payload.id)
        })
    };

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        products,
        state
    }
};

export default useInitalState