import Modal from '../UI/Modal'
import React from 'react'
import classes from './Cart.module.css'
export default function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}> {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(((item, i) => <li key={i}>{item.name}</li>))}</ul >
    return (
        <Modal>
            <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    )
}