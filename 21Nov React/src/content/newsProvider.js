import React, {createContext, useEffect, useState } from 'react';

const NewsContext = createContext();

const NewsProvider = ({children}) => {

    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            const respons = await fetch("https://newsapi.org/v2/everything?q=stock&apiKey=e04203a1c8394eedb84b3e546c332d72");
            const data = await respons.json();
            console.log(data);
            setResponse(data);
            setLoading(false);
        }
        fetchApi()
    }, [])
   
  return (
   <NewsContext.Provider value={{response,loading}}>
     {children}
   </NewsContext.Provider>
  )
}

export {NewsContext, NewsProvider};