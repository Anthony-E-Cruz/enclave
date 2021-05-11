import React, { useContext, useState, useEffect } from 'react' /* eslint-disable */
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ProductInfo from "../components/ProductPage/ProductInfo"
import StoreContext from '../context/store'
import VariantSelectors from "../components/ProductPage/VariantSelectors"
import QuantityButton from "../components/ProductPage/QuantityButton"
import Buttons from "../components/ProductPage/Buttons"
import Gallery from "../components/ProductPage/Gallery"
import styled from "styled-components"

const ProductTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: black
`

const DetailLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductOptions = styled.div`
  display: flex;
  flex-direction: column
`

const ProductTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2vh
`

const DescriptionHtml = styled.div`
  display: flex;
  flex-direction: column;
`

const ModalsText = styled.p`
  
`

const productPage = ({ data }) => {
    const context = useContext(StoreContext);
    const product = data.shopifyProduct;
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState(product.variants[0]);
    const productVariant = context.store.client.product.helpers.variantForOptions(product, variant) || variant;
    const [available, setAvailable] = useState(productVariant.availableForSale);
    const [sizeModal, setSizeModal] = useState(false);
    const [careModal, setCareModal] = useState(false);

    const openSizeGuide = () => {
        setSizeModal(true)
    }
    const closeSizeGuide = () => {
        setSizeModal(false)
    }

    const openCareInstructions = () => {
        setCareModal(true)
    }
    const closeCareInstructions = () => {
        setCareModal(false)
    }

    useEffect(() => {
        let defaultOptionValues = {}
        product.options.forEach(selector => {
            defaultOptionValues[selector.name] = selector.values[0]
        })
        setVariant(defaultOptionValues)
    }, [])

    useEffect(() => {
        checkAvailability(product.shopifyId)
    }, [productVariant])

    const checkAvailability = productId => {
        console.log(context)
        context.store.client.product.fetch(productId).then((product) => {
            // this checks the currently selected variant for availability
            console.log("product", product)
            const result = product.variants.filter(
                variant => variant.id === productVariant.shopifyId
            )
            setAvailable(result[0].available)
        })
    }

    const handleOptionChange = event => {
        const { target } = event
        setVariant(prevState => ({
            ...prevState,
            [target.name]: target.value,
            ...console.log(variant)
        }))
    }

    return (
        <>
            <SEO title={product.title} />
                <ProductTemplateWrapper>
                    <ProductTitle>{product.title}</ProductTitle>
                    <Gallery product={product} />
                    <ProductOptions>
                        <DetailLinks>
                            <ModalsText onClick={openSizeGuide}>View Size Guide</ModalsText>
                            <ModalsText onClick={openCareInstructions}>View Care Instruction</ModalsText>
                        </DetailLinks>
                        <ProductInfo product={product} />
                            {
                                product.options.map(options => (
                                    options.name !== "Title" ? 
                                        <VariantSelectors
                                            key={options.id.toString()}
                                            onChange={handleOptionChange}
                                            options={options}
                                        /> : null 
                                ))
                            }
                        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
                        <br/>
                        <Buttons 
                            context={context} 
                            available={available} 
                            quantity={quantity} 
                            productVariant={productVariant}
                        />
                        <hr />
                        <DescriptionHtml
                            key={`body`}
                            id="content"
                            className="content"
                            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                        />
                    </ProductOptions>
                </ProductTemplateWrapper>
                <div className="container has-text-centered">
                    <a className="is-medium button" href="/"> ← Back to the Store</a>
                </div>

                {sizeModal ?                     
                <div>
                    <div className="modal-background" onClick={closeSizeGuide}>
                    </div>
                    <div className="modal-content">
                    </div>
                </div> : null}
                {careModal ? 
                <div className={` ${careModal === true ? "modal is-active" : "modal"}`}>
                    <div className="modal-background" onClick={closeCareInstructions}>
                    </div>
                    <div className="modal-content">
                    </div>
                </div> : null}
            <button className="modal-close is-large" onClick={closeSizeGuide} aria-label="close"></button>
        </>
    )
}

export default productPage

export const query = graphql`
  query($id: String!){
                shopifyProduct(handle: {eq: $id}) {
                handle
            id
            title
            handle
            productType
            descriptionHtml
            shopifyId
            options {
              id
              name
              values
            }
            variants {
                id
                title
                price
                availableForSale
                shopifyId
                selectedOptions {
                  name
                  value
                }
              }
              images {
                originalSrc
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
        } 
      }
    `
