import NewsItem from './NewsItem';
import React , { useEffect, useState } from 'react';
import Axios from 'axios';


const NewsList = () => {
   
   const [articles, setArticles] = useState([]);

useEffect ( ( ) => {

    const getArticles = async () => {

        

        const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=br&apiKey=5ae58f63e80c4d0ab0cd1a30fc50545b")

        
        setArticles(res.data.articles)
        console.log(res);


    }

    getArticles();


}, []);

    return (

        <div>

            {articles.slice(0, 5).map(({title, description, url, urlToImage}) => (

                <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />

            ))}
        
        </div>
    )
}

export default NewsList
