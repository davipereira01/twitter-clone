import NewsItem from './NewsItem';
import React , { useEffect, useState } from 'react';
import Axios from 'axios';


const NewsList = () => {
   
   const [articles, setArticles] = useState([]);

useEffect ( ( ) => {

    const getArticles = async () => {

        

        const res = await Axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-09-27&sortBy=publishedAt&apiKey=cb976e0ef714444a861ef091c4def86b")

        
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