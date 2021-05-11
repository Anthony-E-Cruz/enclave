import React, { useContext } from 'react'; /* eslint-disable */
import Seo from "../components/seo"
import StoreContext from "../context/store"
import Products from "../components/Cart/Products"
import Empty from "../components/Cart/Empty"
import Navbar from "../components/Navbar/Navbar"

const Cart = () => {

    const context = useContext(StoreContext)
    const { checkout } = context.store
    console.log(checkout)
    return (
        <>
            {/* <Seo /> */}
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container">
                        {
                            checkout.lineItems.length !== 0 ?
                            <Products checkout={checkout}/>
                            :
                            <Empty/>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;