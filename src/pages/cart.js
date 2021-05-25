import React, { useContext } from 'react'; /* eslint-disable */
import Seo from "../components/seo"
import StoreContext from "../context/store"
import Products from "../components/Cart/Products"
import Empty from "../components/Cart/Empty"
import Navbar from "../components/Navbar/Navbar";
import styled from 'styled-components';

const CartWrapper = styled.div`
    margin-top: 2rem;
`

const Cart = () => {

    const context = useContext(StoreContext)
    const { checkout } = context.store
    console.log(checkout)
    return (
        <CartWrapper>
            <Seo />
            {
                checkout.lineItems.length !== 0 ?
                <Products checkout={checkout}/>
                :
                <Empty/>
            }
        </CartWrapper>
    );
}

export default Cart;