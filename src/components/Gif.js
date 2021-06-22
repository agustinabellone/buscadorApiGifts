import React from 'react';
import Media from 'react-media';

function Gif({ title, id, url }) {
    return (
        <>
        <Media query="(min-width: 1200px)">
            <a href={`${id}`} className='gif'>
                <h4>{title}</h4>
                <img alt={title} src={url} />
            </a>        
        </Media>
        <Media query="(max-width: 1199px)">
         <a href={`${id}`} className='gif2'>
             <h4>{title}</h4>
             <img alt={title} src={url} />
         </a>        
        </Media>
    </>
    );
}

export default Gif;
