import React from 'react';

function Button(props) {
    const buttonStyle = {
        color: props.color ? props.color : 'white',
        background: props.background ? props.background : 'black',
        border: 'none',
        borderRadius: '2px',
        margin: '4px',
    };
    return <button style={buttonStyle}>Klik di sini</button>;
}

export default Button;
