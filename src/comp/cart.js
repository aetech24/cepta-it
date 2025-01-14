import React, { useState, useEffect } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineArrowUp } from 'react-icons/ai'
const Cart = ({ cart, setCart }) => {
    //Increase Quantity of cart product
    const inqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
        }))
    }
    //decrease Quantity of cart product
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
        }))
    }
    //Remove cart product
    const removeproduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 0) {
            setCart(cart.filter((curElm) => {
                return curElm.id !== product.id
            }))
        }
    }
    //Total price
    const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div class="cart">
                <h3>#cart</h3>
                {
                    cart.length === 0 &&
                    <>
                        <div class="empty_cart">
                            <h2>Your Shopping cart is empty</h2>
                            <Link to="/shop"><button>Shop Now</button></Link>
                        </div>
                    </>
                }
                <div class="container">
                    {
                        cart.map((curElm) => {
                            return (
                                <>
                                    <div class="box">
                                        <div class="img_box">
                                            <img src={curElm.image} alt="cart-product"></img>
                                        </div>
                                        <div class="detail">
                                            <div class="info">
                                                <h4>{curElm.cat}</h4>
                                                <h3>{curElm.Name}</h3>
                                                <p>Price: ${curElm.price}</p>
                                                <p>Total: ${curElm.price * curElm.qty}</p>
                                            </div>
                                            <div class="quantity">
                                                <button onClick={() => inqty(curElm)}>+</button>
                                                <input type="number" value={curElm.qty}></input>
                                                <button onClick={() => decqty(curElm)}>-</button>
                                            </div>
                                            <div class="icon">
                                                <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div class="bottom">
                    {
                        cart.length > 0 &&
                        <>
                            <div class="Total">
                                <h4>Total: ${total}</h4>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="scroll-to-top" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
                <AiOutlineArrowUp />
            </div>
        </>
    )
}

export default Cart