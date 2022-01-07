import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        totalSalary += parseInt(user.salary, 10);
        
    }
    //const totalSalary = cart.reduce( (sum,user) => sum + user.salary,0)
    return (
        <div>
            <h4>Total Person Added: {cart.length}</h4>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Cart;