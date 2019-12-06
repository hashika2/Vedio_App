import React from 'react';
import './vedioItem.css';

const VedioItem =({vedio,onVedioSelected})=>{
    return (
    <div onClick={()=>onVedioSelected(vedio)} className="vedio-item">
        <img className="ui image" src={vedio.snippet.thumbnails.medium.url}/>
        <div className="content">
            <div className="header">{vedio.snippet.title}
            </div>
        </div>
        
    </div>
    
    )
}

export default VedioItem;