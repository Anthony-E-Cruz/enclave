import React from 'react';
import styled from 'styled-components';

const QuantityWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5vw;
`

const QuantityLabel = styled.div`

`

const QuantityInner = styled.div`
    display: flex
`

const ButtonWrapper = styled.div`
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: 1px solid black
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