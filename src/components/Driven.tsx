import React from 'react';
import styled from 'styled-components';

function Divider() {
    return (
        <DividerStyle/>
    )
}

export default Divider

const DividerStyle = styled.div`
    width: 6rem;
    margin: 0 auto;
    margin: 6rem 0 4rem 0;
    border: 0 solid #e5e7eb
`;