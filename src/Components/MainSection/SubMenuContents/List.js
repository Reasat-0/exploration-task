import { useEffect, useState } from "react";

// Vendor Import 
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import Loader from '../../../assets/img/loader.gif'
import ItemsTable from './ItemsTable'
const List = () => {
    const [allUsers,setAllUsers] = useState([])
    const [loading,setLoading] = useState(false)

    // Pagination

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    const url = "https://randomuser.me/"
    
    useEffect(()=>{
        fetchUsers();

    },[])


    const fetchUsers = () => {
        setLoading(true)
        axios.get(`${url}api/?results=20`)
        .then( (res) => {
            
            if(res.status === 200){
                const newUsers = res.data.results;
                setAllUsers( (prev) => ([
                    ...newUsers
                ]) );
                // const endOffset = itemOffset + itemsPerPage;
                // setCurrentItems(allUsers.slice(itemOffset, endOffset));
                // setPageCount(Math.ceil(allUsers.length / itemsPerPage));
                setLoading(false)


                
            }
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
                setCurrentItems(allUsers.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(allUsers.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, allUsers]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allUsers.length;
        setItemOffset(newOffset);
    };

    

    return (
        <div className="list-container">
            {
                loading &&
                <img src={Loader} alt="loader" style={{maxWidth :'250px' }}/>
            }
                
            
            {
                !loading &&
                <>
                    <ItemsTable data={currentItems} />
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< "
                        renderOnZeroPageCount={null}
                        containerClassName={"pagination-container"}
                        pageLinkClassName={"pagination-link"}
                        previousLinkClassName={"pagination-link"}
                        nextLinkClassName={"pagination-link"}
                        activeLinkClassName={"pagination-active"}
                    />
                </>
            }
        </div>
    )
}

export default List;