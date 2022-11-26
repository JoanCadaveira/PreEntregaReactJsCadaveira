import React from "react";

const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn fondoCart position-relative">
                <img src={"images/cart.svg"} alt="cart" width={22}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            *
            </span>
            </button>
        </div>
    )
}

export default CartWidget;