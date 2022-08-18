const TableRows = ({rows}) => {

    const {name,email,cell,dob,gender,picture} = rows;

    return (
      <tr>
        <td> {name.title + name.first + name.last}</td>
        <td>{email}</td>
        <td>{cell}</td>
        <td>{dob ? dob.age : 'N/A'}</td>
        <td>{gender.toUpperCase()}</td>
        <td> {picture ? <img src={picture.thumbnail} alt={'test'}></img> : "N/A"}</td>
      </tr>

    )
}
export default TableRows;