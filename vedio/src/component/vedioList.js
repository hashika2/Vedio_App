import React from 'react';
import VedioItem from './vedioItem';

 const vedioList =({vedios})=>{
     const getVedioItems =vedios.map(vedio=>{
        return <VedioItem vedios={vedio} id={vedio.id}/>;
     })
    return(
        <div>{getVedioItems}</div>
    )
}

export default vedioList;