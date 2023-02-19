import './Hamburguesa.css'

import React from 'react';

const Hamburguesa = (props) => {
    return(
        <div onClick={props.handleClick} className= {`icon nav-icon-5 ${props.click ? `open` : `` }`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { Hamburguesa }