import React, {useState} from 'react';
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Collection = ({context, products}) => {
    const [type, setType] = useState(context.filteredType)

    const productTypes = []
    const types = []
    types.push(
        <option value="all" key="-1">
            All
        </option>
    )
    products.map((t, i) => {
        let type = t.node.productType
        if (!productTypes.includes(type) && type.length > 0) {
            productTypes.push(type)
            types.push(
                <option key={i} value={type}>
                    {type}
                </option>
            )
        }
        return null
    })
    productTypes.sort()

    const handleFilterType = (value) =>{
        setType(value)
        context.updateFilterType(value)
      }
    return (
        <FilterWrapper>
        <p>FILTER BY :</p>
            <div className="select">
                <select
                    defaultvalues={type}
                    onBlur={e => handleFilterType(e.target.value)}
                    onChange={e => handleFilterType(e.target.value)}
                    id="filter"
                >
                    {types}
                </select>
            </div>
        </FilterWrapper>
    );
};

export default Collection;