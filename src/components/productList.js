import React, {useContext} from 'react';
import ProductBox from "./ProductList/productBox"
import styled from "styled-components"
import Sort from "./Filter/sort"
import Collection from './Filter/collection';
import StoreContext from '../context/store'

const Params = styled.div`
  position: relative;
  z-index: 1;
  marginBottom: 60px;
  margin: 0;
  padding: 10px;
`

const ShopItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%
  }
`

const ShopTools = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
  }
`

const ShopToolsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 15vh
  }
`

const ProductList = ({ data }) => {
  const { edges: products } = data.allShopifyProduct
  const context = useContext(StoreContext);

  return (
    <>
      <Params>
        <ShopToolsWrapper>
          <ShopTools>
            <Sort context={context} />
          </ShopTools>
          <ShopTools>
            <Collection context={context} products={products} />
          </ShopTools>
        </ShopToolsWrapper>
        <ShopItems>
          {
            products
            .filter(p => context.store.filteredType === 'all' ? p : (p.node.productType.includes(context.store.filteredType)))
            .sort(
              context.store.filteredSort === "featured" ? (a) => (a)
              : context.store.filteredSort === "low" ? ((a, b) => a.node.variants[0].price - b.node.variants[0].price)
              : context.store.filteredSort === "high" ? ((a, b) => b.node.variants[0].price - a.node.variants[0].price)
              : context.store.filteredSort === "Z-A" ? ((a, b) => b.node.title.localeCompare(a.node.title))
              : context.store.filteredSort === "A-Z" ? ((a, b) => a.node.title.localeCompare(b.node.title)) : null
              )
              .map((p, i) => {
                let product = p
                return (
                  <ProductBox key={i} product={product} />
                )
              })}
        </ShopItems>
      </Params>
    </>
  );
};

export default ProductList;