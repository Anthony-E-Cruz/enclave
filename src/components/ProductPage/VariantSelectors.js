import React from 'react'; /* eslint-disable */
import styled from 'styled-components';

const VariantSelectorWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const VariantSelect = styled.select`
    width: 30%;
    border: none;
    text-align: center;
    background: white;
`

const VariantLabel = styled.label`
    margin-bottom: 0 !important;
`

const VariantOption = styled.option`
    width: 30%;
    background: white;
`

const VariantSelector = ({onChange, options}) => {
    return (
        <VariantSelectorWrapper>
            <VariantLabel className="label">{options.name} </VariantLabel>

            {/* <div className="control"> */}
                {/* <div className="select is-fullwidth"> */}
                    <VariantSelect onChange={onChange} name={(options.name)} key={options.id}>
                        {
                            options.values.map(value => (
                                <VariantOption 
                                    key={`${options.name}-${value}`}
                                    value={value}
                                >
                                    {`${value}`}
                                </VariantOption>
                            ))
                        }
                    </VariantSelect>
                {/* </div> */}
            {/* </div> */}
        </VariantSelectorWrapper>
    );
};

export default VariantSelector;