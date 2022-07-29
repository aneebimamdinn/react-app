import React from 'react';
import Item from './Item';

function Listing(props) {
    const arr = [
        {'name' : 'Item1', 'id': 1},
        {'name' : 'Item2', 'id': 2},
        {'name' : 'Item3', 'id': 3},
        {'name' : 'Item4', 'id': 4},
    ]
    return (
        <div>
            <h1>{props.heading}</h1>
                {
                arr.map(item => {
                    return <Item key={item.id} name={item.name}/>
                })
                }
        </div>
    );
}
Listing.defaultProps = {
    'heading' : 'Listing PAGE'
}
export default Listing;