import React from 'react';
import VedioItem from './vedioItem';

 const vedioList =({vedios,onVedioSelected})=>{
     console.log(vedios)
     const getVedioItems =vedios.map(vedio=>{
        return <VedioItem onVedioSelected={onVedioSelected} vedios={vedio}/>;
     })
    return(
        <div className="ui relaxed divided list">{getVedioItems}</div>
    )
}

export default vedioList;