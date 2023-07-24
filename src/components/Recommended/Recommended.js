import React from 'react'
import Album from '../Album/Album'
import './Recommended.css'

const Recommended = ({ recommendedData }) => {
    
    if (recommendedData) {
        const recommendedAlbums = recommendedData.results.map(item => <Album key={item.id} id={item.id} title={item.title} coverImg={item.cover_image}/>)

        return (
            <section className='recommendedContainer'>
                <h2>{'Vinyl albums trending today'}</h2>
                {recommendedAlbums}
            </section>
        )
    }
}

export default Recommended