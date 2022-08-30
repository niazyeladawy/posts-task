import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const PostDetails = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);


    useEffect(() => {
        handleFetchData(params.Id);
    }, []);

    const handleFetchData = async (id) => {
        setloading(true);
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if(data){
            setData(data);
            setloading(false)
        }
        
    }
    
    return (
        <div className='post-details'>
            <div className='container'>
                <div >
                    
                    <Link to="/">Posts</Link>
                </div>
                <h1 className='mb-5'>Post Details</h1>
                {
                    loading ?<div className='text-center'> <FontAwesomeIcon  size='5x' icon={faSpinner} color="" spin /> </div> : <div className=''>
                    <h2 className='fw-bold'>Title: {data?.title}</h2>
                    <p>Body: {data?.body}</p>
                </div>
                }
               
            </div>
        </div>
    )
}

export default PostDetails