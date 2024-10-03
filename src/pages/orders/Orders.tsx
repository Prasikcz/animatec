import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { orders } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'orderNumber',
        headerName: 'Číslo objednávky',
        type: "string",
        width: 150,
        editable: false,
        
    },
    {
        field: 'created',
        headerName: 'Datum vytvoření',
        type: "string",
        width: 150,
        editable: false,
    },
    {
        field: 'value',
        headerName: 'Hodnota',
        type: "number",
        width: 150,
        editable: false,
    },
    {
        field: 'state',
        headerName: 'Stav',
        type: "number",
        width: 150,
        editable: false,
    },
    {
        field: 'userId',
        headerName: 'Uživatel',
        type: "string",
        width: 150,
        editable: false,
    },
];

const Orders = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="users bg-dark text-white w-100 px-3 py-2">
            <div className="info d-flex justify-content-between align-items-center">
                <h1>Objednávky</h1>
                <button className="btn-primary btn text-uppercase" onClick={()=>setOpen(true)}>Vytvořit objednávku</button>
            </div>
            <div className="py-3">
                <DataTable slug="objednavky" columns={columns} rows={orders} />
                {open && <Add slug="objednavky" columns={columns} setOpen={setOpen} />}
                
            </div>
        </div>
    );
}

export default Orders;