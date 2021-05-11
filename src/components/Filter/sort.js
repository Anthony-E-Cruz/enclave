import React, { useState } from 'react';
import styled from "styled-components";

const SortWrapper = styled.div`
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

const Sort = ({context}) => {
  const [sort, setSort] = useState(context.filteredSort)
  const sorts = []


  sorts.push(
    <>
      <option key={0} value="featured">
        Featured
        </option>
      <option key={1} value="A-Z">
        Alphabetically, A-Z
        </option>
      <option key={2} value="Z-A">
        Alphabetically, Z-A
        </option>
      <option key={3} value="low">
        Price, low to high
        </option>
      <option key={4} value="high">
        Price, high to low
        </option>
    </>
  )

  const handleFilterSort = (value) =>{
    setSort(value)
    context.updateFilterSort(value)
  }
  
  return (
    <SortWrapper>
      <p>SORT BY :</p>
          <div className="select">
            <select
              defaultvalues={sort}
              onChange={e => handleFilterSort(e.target.value)}
              onBlur={e => handleFilterSort(e.target.value)}
              id="sortBy"
            >
              <option key={0} value="featured">
                Featured
                </option>
              <option key={1} value="A-Z">
                Alphabetically, A-Z
                </option>
              <option key={2} value="Z-A">
                Alphabetically, Z-A
                </option>
              <option key={3} value="low">
                Price, low to high
                </option>
              <option key={4} value="high">
                Price, high to low
                </option>
            </select>
          </div>
    </SortWrapper>
  );
};

export default Sort;