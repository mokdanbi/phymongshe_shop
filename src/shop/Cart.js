import React from 'react'

const Cart = ({ cart }) => {
    return (
        <div style={{ paddingTop: '500px' }}>
            {
                cart.map(ct => {
                    return (
                        <ul>
                            <li>{ct.id}</li>
                            <li>{ct.itm}</li>
                            <li>{ct.price}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Cart