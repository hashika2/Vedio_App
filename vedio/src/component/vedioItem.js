import React from 'react';
import './vedioItem.css';

const VedioItem =({vedios,onVedioSelected})=>{
    //console.log(video);
    return (
    <div onClick={()=>onVedioSelected(vedios)} className="vedio-item">
        <img className="ui image" src={vedios.snippet.thumbnails.medium.url}/>
        <div className="content">
            <div className="header">{vedios.snippet.title}
            </div>
        </div>
        
    </div>
    
    )
}

export default VedioItem;