import React from 'react';
import VedioItem from './vedioItem';

 const vedioList =({vedios,onVedioSelected})=>{
     const getVedioItems =vedios.map(vedio=>{
        return <VedioItem onVedioSelected={onVedioSelected} vedios={vedio} id={vedio.id}/>;
     })
    return(
        <div className="ui relaxed divided list">{getVedioItems}</div>
    )
}

export default vedioList;