import React from 'react';
import styled from 'styled-components';

const QuantityWrapper = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
`

const QuantityLabel = styled.label`
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 700;
`

const QuantityInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
`

const ButtonWrapper = styled.div`
    background: none;
`

const Button = styled.button`
    border: none;
    background: white;
`

const QuantityButton = ({ quantity, setQuantity }) => {
    const increaseQuantity = () => {
        setQuantity(q => q + 1);
    }
    const decreaseQuantity = () => {
        setQuantity(q => (q <= 1 ? 1 : q - 1));
    }
    return (
        <QuantityWrapper>
            <QuantityLabel htmlFor="quantity" >Quantity </QuantityLabel>
            <QuantityInner>
                <ButtonWrapper>
                    <Button onClick={decreaseQuantity}>
                        -
                    </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button >
                        {quantity}
                    </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button onClick={increaseQuantity}>
                        +
                    </Button>
                </ButtonWrapper>
            </QuantityInner>
        </QuantityWrapper>
    );
};

export default QuantityButton;