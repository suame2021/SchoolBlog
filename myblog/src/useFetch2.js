import {useState, useEffect  } from "react";
import axios from 'axios'
import api from "./api";

const useFetch2 = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(

        () =>{ 
            setTimeout(() => {

                const fetchPosts = async () => {
                    try {
                        const response = await api.get(url)
                        // console.log(response.data.data)
                        setIsPending(false)
                        setData(response.data.data)
                    } catch (error) {
                        if(error.response){
                            // setIsPending(true);
                            setError(error.response.data)
                        
                        console.log(error.response.status)
                        console.log(error.response.headers)
                        }else{
                            setError(error.message)
                        }
                    }
                }
                fetchPosts();
            }, 100);
            
        }, [url]
    )
    //end of useEffect default react hook
    return {data, isPending, error}
}

export default useFetch2;