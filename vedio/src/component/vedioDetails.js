import React from 'react';

const vedioDatails=({vedio})=>{
    if(!vedio){
        return <div>LOADING ....</div>
    }

    const videoSrc=`http://www.youtube.com/embed/${vedio.id.videoId}`
    return(
    <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{vedio.snippet.title}</h4> 
            <p>{vedio.snippet.description}</p>       
        </div></div>
    )
}

export default vedioDatails;