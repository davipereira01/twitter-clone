import React from 'react'

import './newsItem.css';

const NewsItem = ({title, url, urlToImage, }) => {

    return (

                <div className='newsItem'> 

                

                    <img className='newsImg' src={urlToImage} alt="News Image" />
                    <h3> <a href={url}>{title}</a>  </h3>
                    <p>Assuntos do momento em Brasil</p>

                </div>
            )
        }

        export default NewsItem