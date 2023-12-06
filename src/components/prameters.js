import React from "react";
import { useParams } from "react-router-dom";


const Param = ()=>{
    const params = useParams();
    return(
        <>
        <span>{params.id}</span>
        </>

    )
}

export default Param;