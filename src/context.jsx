import React, { useContext, useEffect, useState } from "react";
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=7e649e17&s=titanic`;



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setError] = useState({ show: "false", msg: "" })
    //passed the object ,BY default it will be false and messages will be empty
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data.Response === "True")//object contains response as true, if it is true then only in setMovie data will be passed
            {
                setisLoading(false); //as I have received the data
                setMovie(data.Search)
            } else {
                setError({
                    show: true,
                    msg: (data.error)
                })
            }
        }
        catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    getMovies(API_URL)
},[])
return (
    <AppContext.Provider value={{isLoading,movie,isError}}>
        {children}
    </AppContext.Provider>
);
};

//global custom hooks
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export { AppProvider, AppContext ,useGlobalContext};