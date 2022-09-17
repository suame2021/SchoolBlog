import {useState, useEffect  } from "react";
import axios from 'axios'
import api from "./api";
import swal from 'sweetalert'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(

        () =>{ 
            setTimeout(() => {

                const fetchPosts = async () => {
                    try {
                        const response = await api.get('/blogs')
                        // console.log(response.data.data)
                        setIsPending(false)
                        setData(response.data.data)
                    } catch (error) {
                        if(error.response){
                            // setIsPending(true);
                        setError(error.response.data)
                        swal("Success", error.response.data, "success")
                        // console.log(error.response.data)
                        // console.log(error.response.status)
                        // console.log(error.response.headers)
                        }else{
                            setError(error.message)
                        }
                    }
                }
                fetchPosts();
            }, 10);
            
        }, [url]
    )
    //end of useEffect default react hook
    return {data, isPending, error}
}

export default useFetch;