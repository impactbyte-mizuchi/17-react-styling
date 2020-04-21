import React from 'react';
import styled, { css } from 'styled-components';

const HeaderStyle = styled.header`
    display: flex;
    border: 0.25px solid grey;
    padding: 10px;
    justify-content: space-between;

    & > div:nth-child(2) {
        display: flex;
        justify-content: space-around;
    }

    & > div {
        flex: 1;
    }

    & > div > a:hover {
        background: grey;
    }

    ${(props) =>
        props.primary &&
        css`
            background: yellow;
        `}

    @media screen and (min-width: 750px) {
        background: pink;

        & > div > a:hover {
            background: green;
        }
    }
`;

const Anchor = styled.a`
    color: blue;
`;

function Header(props) {
    return (
        <HeaderStyle primary={props.primary}>
            <div>
                <Anchor href='https://www.google.com'>Logo</Anchor>
            </div>
            <div className='second-div'>
                <a href='https://styled-components.com/'>Styled component</a>
                <a href='https://styled-components.com/'>Style</a>
                <a href='https://styled-components.com/'>Style</a>
            </div>
        </HeaderStyle>
    );
}

export default Header;
