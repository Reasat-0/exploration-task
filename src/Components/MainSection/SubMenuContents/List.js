import { useEffect, useState } from "react";

// Vendor Import 
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchIcon from '@mui/icons-material/Search';

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

    const paginatingTable = (itemOffset, itemsPerPage) => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(allUsers.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allUsers.length / itemsPerPage));
    }

    // Search Items

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
                setLoading(false) 
            }
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        paginatingTable(itemOffset, itemsPerPage)
    }, [itemOffset, itemsPerPage, allUsers]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allUsers.length;
        setItemOffset(newOffset);
    };

    const handleSearch = (e) => {
        let searchItem = e.target.value;
        let foundItems = []
        if(searchItem.length > 0){

            // Main Search Logic....
            foundItems = allUsers.filter(obj =>  obj.gender.toLowerCase().includes(searchItem) || obj.email.toLowerCase().includes(searchItem) || Object.values( obj.name ).some(val => val.includes(searchItem)) )
            setCurrentItems(foundItems)
        }
        else{
            paginatingTable(itemOffset, itemsPerPage)
        }
    }

    return (
        <div className="list-container">
            {
                loading &&
                <img src={Loader} alt="loader" style={{maxWidth :'250px' }}/>
            }
                
            
            {
                !loading &&
                <>
                    <div className="search-box">
                        <div className="search-icon-holder">
                            <SearchIcon/>

                        </div>
                        <input className="search-input" type={'text'} onChange={handleSearch} placeholder="Search by name, gender and email"/>
                    </div>
                    
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