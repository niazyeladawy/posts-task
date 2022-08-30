import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Posts = () => {

    const [data, setData] = useState([]);
    const [pageCount, setpageCount] = useState(10);
    const [loading, setloading] = useState(false);

    useEffect(() => {

        handleFetchData(1);

    }, []);

    const handleFetchData = async (currentPage) => {
        setloading(true);
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`);

        if (data) {
            setData(data);
            setloading(false)
        }

    }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        handleFetchData(currentPage)
    };

    return (
        <div className='posts'>
            <div className='container'>
                <h1 className='mb-5'>posts</h1>
                <div className='row'>
                    {
                        loading ? <div className='text-center'> <FontAwesomeIcon size='5x' icon={faSpinner} color="" spin /> </div> : data.map((item, idx) => (
                            <div className='col-lg-6 mb-4' key={item.id}>
                                <Link className='shadow p-3 rounded h-100 d-block text-decoration-none' to={"postdetails/" + item.id}>
                                    <h3 className='text-black'>{item.title}</h3>
                                    <p className='lead text-secondary'>{item.body}</p>
                                </Link>
                            </div>
                        ))
                    }

                </div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div>
        </div>

    )
}

export default Posts