import { useEffect, useState } from "react";
import axios from 'axios';
import { Table } from "reactstrap";
import TableRows from './tableRows';

import Loader from '../../../assets/img/loader.gif'

const List = () => {
    const [allUsers,setAllUsers] = useState([])
    const [loading,setLoading] = useState(false)

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
        .catch(err => console.error("Erro"))
    }
    return (
        <>
            {
                loading &&
                <img src={Loader} alt="loader" style={{maxWidth :'250px' }}/>
            }
                
            
            {
                !loading &&
                <Table
                >
                    <thead>
                        <tr>
                            
                            <th> Name </th>
                            <th> Email </th>
                            <th> Cell </th>
                            <th> Age </th>
                            <th> gender </th>
                            <th> Picture </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers && 

                            allUsers.map( (item,i) => (
                                <TableRows key={i} rows={item} />
                            ))
                        }
                    </tbody>
                </Table>
            }
        </>
    )
}

export default List;