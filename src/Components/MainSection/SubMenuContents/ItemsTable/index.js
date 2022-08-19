import { Table } from "reactstrap";
import ItemRow from './Item'

const ItemsTable = ({data}) => {
    return (
        <Table
                >
            <thead>
                <tr>
                    
                    <th> Name </th>
                    <th> Email </th>
                    <th> Gender </th>
                    <th> Phone </th>
                </tr>
            </thead>
            <tbody>
                {
                    data && 

                    data.map( (item,i) => (
                        <ItemRow key={i} rows={item} />
                    ))
                }
            </tbody>
        </Table>
    )
}

export default ItemsTable;