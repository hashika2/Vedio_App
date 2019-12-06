import React from 'react';

const vedioDatails=({vedio})=>{
    if(!vedio){
        return <div>LOADING ....</div>
    }
    return(
    <div>{vedio.snippet.title}</div>
    )
}

export default vedioDatails;