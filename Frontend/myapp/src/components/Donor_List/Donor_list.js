import * as React from 'react';
import './Donor_list.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Donor_list() {

  const[data,setData] = useState(rows);
  // const handleDelete = (id) => {
  //    setData(data.filter((item)=> item.id !==id));
  // }
  return (
    <div className='userList'>
      {/* <Button href="#text-buttons">Link</Button> */}
      <DataGrid
        rows={rows} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

const columns = [
  { field: 'id', headerName: 'Donor ID', width: 120 },
  { field: 'fullName', headerName: 'Full name', width: 130 },
  { field: 'DOB', headerName: 'DOB', width: 120 },
  {
    field: 'Gender',
    headerName: 'Gender',
    width: 100,
  },
  {
    field: 'Occupation',
    headerName: 'Occupation',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },

  {
    field:"action",
    headerName: "Action",
    width:150,
    renderCell: (params) =>{
      return(
        <>
        <Link to={"/user/" + params.row.id}>
        <button className='userListEdit'>Edit</button>
        </Link>
        {/* onClick={()=>handleDelete(params.row.id)} */}
        <DeleteOutlineIcon className='userListDelete'/>
        </>
      )
    }
  }
];

const rows = [
  { id: 1, fullName: 'Snow Jon', DOB:'2-12-2001' ,Gender: 35, Occupation:'worker' },
  { id: 2, fullName: 'Lannister', DOB:'2-12-2001', Gender: 42, Occupation:'worker' },
  { id: 3, fullName: 'Lannister',DOB:'2-12-2001', Gender: 45, Occupation:'worker' },
  { id: 4, fullName: 'Stark', DOB:'2-12-2001', Gender: 16, Occupation:'worker' },
  { id: 5, fullName: 'Targaryen', DOB:'2-12-2001', Gender: 'M', Occupation:'worker' },
  { id: 6, fullName: 'Melisandre', DOB:'2-12-2001', Gender: 150, Occupation:'worker' },
  { id: 7, fullName: 'Clifford', DOB:'2-12-2001', Gender: 44, Occupation:'worker' },
  { id: 8, fullName: 'Frances',DOB:'2-12-2001', Gender: 36, Occupation:'worker' },
  { id: 9, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },
  { id: 10, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },
  { id: 11, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },
  { id: 12, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },
  { id: 13, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },
  { id: 14, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },
  { id: 15, fullName: 'Roxie', DOB:'2-12-2001', Gender: 65, Occupation:'worker' },

];
