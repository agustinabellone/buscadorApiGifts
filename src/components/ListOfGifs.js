import React, { useState, useEffect } from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs'
import Media from 'react-media';

function ListOfGifs(params) {
    const { keyword } = params
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        <>
            <Media query="(min-width: 1200px)">
                <div className='giftsList'>
                    {
                        gifs.map(singleGif =>
                            <Gif
                                key={singleGif.id}
                                title={singleGif.title}
                                url={singleGif.url}
                                id={singleGif.id} />
                        )
                    }
                </div>
            </Media>
            <Media query="(max-width: 1199px)">
                <div className='giftsList2'>
                    {
                        gifs.map(singleGif =>
                            <Gif
                                key={singleGif.id}
                                title={singleGif.title}
                                url={singleGif.url}
                                id={singleGif.id} />
                        )
                    }
                </div>
            </Media>
        </>

    );
}

export default ListOfGifs;