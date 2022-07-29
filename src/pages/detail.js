import React from 'react';
import {
    useParams,
  } from "react-router-dom";

function Details(props) {
    const { id } = useParams();
    return (
        <div>
            <h1>Details of ITEM : {id}</h1>
        </div>
    );
}

export default Details;