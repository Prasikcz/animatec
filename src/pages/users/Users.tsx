import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { users } from "../../data";
import { useEffect, useState } from "react";
import Add from "../../components/add/Add";
import axios from "axios";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'Jméno',
        type: "string",
        width: 150,
        editable: false,
        
    },
    {
        field: 'lastName',
        headerName: 'Příjmení',
        type: "string",
        width: 150,
        editable: false,
    },
    {
        field: 'email',
        headerName: 'E-mail',
        type: "email",
        width: 150,
        editable: false,
    },
    {
        field: 'phone',
        headerName: 'Telefoní číslo',
        type: "string",
        width: 150,
        editable: false,
    },
];

const Users = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const [open, setOpen] = useState(false)

    return (
        <div className="users bg-dark text-white w-100 px-3 py-2">
            <div className="info d-flex justify-content-between align-items-center">
                <h1>Uživatelé</h1>
                <button className="btn-primary btn text-uppercase" onClick={()=>setOpen(true)}>Přidat uživatele</button>
            </div>
            <div className="py-3">
                <DataTable slug="uzivatele" columns={columns} rows={data} />
                {open && <Add slug="uživatele" columns={columns} setOpen={setOpen} />}
            </div>
        </div>
    );
}

export default Users;