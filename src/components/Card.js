import React from 'react';
import styled from '@emotion/styled';

import image from '../assets/images/ca8.jpg';

const CardStyle = styled.div`
    width: 400px;
    border: 0.25px solid grey;
    padding: 5px;

    & img {
        width: 100%;
        background: grey;
    }

    &:hover {
        font-size: 50px;
    }

    @media (min-width: 300px) {
        background: pink;
    }
`;

function Card() {
    return (
        <CardStyle>
            <img src={image} alt='/' />

            <div>
                <h1>programmer</h1>
            </div>
        </CardStyle>
    );
}

export default Card;
