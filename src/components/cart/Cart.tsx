import './Cart.css'
import data from "../../data/data";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Cart = () =>{
    const store = useSelector(state=>state.cart.things)
    console.log(store)
    const subtotal = store.reduce((accumulator,el)=>{
        accumulator+=el.price*el.quantity
        return accumulator
    },0)
    return (
        <div className="cart">
            <div className="cart__wrapper">
                <div className="cart__table-wrapper">

                    {store.length===0&& <h1 className="cart__empty">Cart is empty</h1>}

                    {store.length!==0 &&(
                        <table className="cart__table">
                            <thead className="cart__header-wrapper">
                            <tr className="cart__table-headers">
                                <th className="cart__table-headers-wrapper-products">
                                    Products
                                </th>
                                <th className="cart__table-headers-wrapper-quantity">
                                    Quantity
                                </th>
                                <th className="cart__table-headers-wrapper-total">
                                    Total
                                </th>
                            </tr>
                            </thead>
                            <tbody className="cart__tbody">
                            {store.map(el=>{
                                return(
                                    <tr key={el.id} className="cart__main-table-row">

                                        <td className="cart__main-wrapper">
                                            <Link className="cart__main-link" to={el.path}>
                                                <div className="cart__img-wrapper">
                                                    <img className="cart__img" src={el.img} alt={el.img}/>
                                                </div>
                                                <div className="cart__text-wrapper">
                                                    <p className="cart__text">{el.title}</p>
                                                    <p className="cart__text">{el.price} £</p>
                                                </div>
                                            </Link>

                                        </td>
                                        <td className="cart__quantity-wrapper">
                                            <p className="cart__quantity">{el.quantity}</p>
                                        </td>
                                        <td  className="cart__total-wrapper">
                                            <p className="cart__total">{el.quantity*el.price} £</p>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                            </tbody>
                        </table>
                    )}

                </div>
                {store.length!==0&&(
                    <div className="cart__order-wrapper">
                        <div className="cart__order">
                            <p className="cart__subtotal">Subtotal {subtotal} £</p>
                            <Link className="cart__button-order" to="/">Go to checkout</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart