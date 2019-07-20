import React from 'react'

export default function({VideoId}){
    let videoURL = `https://www.youtube.com/embed/${VideoId}`
    return(
            <iframe width="360" height="215" src={videoURL} frameborder="20" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    )
}