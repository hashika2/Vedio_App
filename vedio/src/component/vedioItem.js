import React from 'react';

const VedioItem =({vedios})=>{
    return <div>
        <img src={vedios.snippet.thumbnails.medium.url}/>
        {vedios.snippet.title}
    </div>
}

export default VedioItem;