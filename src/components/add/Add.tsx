import { useState } from 'react';
import './add.scss'

import { GridColDef } from "@mui/x-data-grid";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //ADD NEW ITEM  
    }

    return (
        <div className="add position-absolute top-0 start-0 d-flex align-items-center justify-content-center flex-column">
            <div className="p-5 bg-dark contentTable">
                <div className="d-flex justify-content-between align-items-center pb-5">
                    <h1>Přidat {props.slug}</h1>
                    <span className='deleteX' onClick={() => props.setOpen(false)}>X</span>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit}>
                        {props.columns.filter(item => item.field !== "id")
                            .map(column => (
                                <div className="form-floating mb-3">
                                    <input type={column.type} className="form-control" id={column.headerName} placeholder={column.headerName} required/>
                                    <label className='text-black' htmlFor={column.headerName}>{column.headerName}</label>
                                </div>
                            ))}
                        <button className='btn btn-primary'>Uložit</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Add;