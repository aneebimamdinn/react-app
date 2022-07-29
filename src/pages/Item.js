import React from 'react';
import {Link} from 'react-router-dom';


function Item(props) {
    const a =`/details/${props.name}`;
    return (
        <div>
            NAME : {props.name}
            <br></br>
            <Link to={a} name={a}>Details</Link>
        </div>
    );
}

export default Item;