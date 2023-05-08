import React, { useReducer } from "react";

export const CartContext = React.createContext();

const intitalState = {
    totalPrice: 0,
    totalProducts: 0,
    selectedProducts: [],
    checkout: false,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            if (!state.selectedProducts.find(item => item.id === action.payload.id)) {
                state.selectedProducts.push({
                    ...action.payload,
                    quantity: 1
                });
                return {
                    ...state,
                    selectedProducts: [...state.selectedProducts],
                    totalProducts: state.totalProducts +1,
                    totalPrice: state.totalPrice + action.payload.price
                }
            }
        }
        case "REMOVE_ITEM": {
            const newProducts = state.selectedProducts.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                selectedProducts: newProducts,
                totalProducts: state.totalProducts-1,
                totalPrice: state.totalPrice - action.payload.price
            }
        }
        case "INCREASE": {
            const productIndex = state.selectedProducts.findIndex(item => item.id === action.payload.id);
            state.selectedProducts[productIndex].quantity++;

            return {
                ...state,
                totalProducts: state.totalProducts+1,
                totalPrice: state.totalPrice + action.payload.price
            }
        }
        case "DECREASE": {
            const productIndex = state.selectedProducts.findIndex(item => item.id === action.payload.id);
            state.selectedProducts[productIndex].quantity--;

            return {
                ...state,
                totalProducts: state.totalProducts-1,
                totalPrice: state.totalPrice - action.payload.price
            }
        }
        case "CLEAR": {
            return {
                totalPrice: 0,
                totalProducts: 0,
                selectedProducts: [],
                checkout: false,
            }
        }
        case "CHECKOUT": {
            return {
                totalPrice: 0,
                totalProducts: 0,
                selectedProducts: [],
                checkout: true,
            }
        }
        default: {
            break;
        }
    }
}

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, intitalState);

    return (
        <>
            <CartContext.Provider value={{state, dispatch}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;