import './dataTable.scss'

import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

const DataTable = (props: Props) => {

    const handleDelete = (id: number) => {
        //delete the item
        console.log(`Uživatel s id: ${id} byl odstraněn`)
    };

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Akce",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="d-flex gap-3">
                    
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" title="Detail" />
                    </Link>
                    
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" title="Odstranit" />
                    </div>
                </div>
            );
        },
    };

    return (
        <div className="dataTable">
            <DataGrid
                className="bg-white"
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}

export default DataTable;