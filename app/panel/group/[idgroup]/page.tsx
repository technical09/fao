'use client';

import { useEffect, useState } from "react";
import { fetchGroupFoods } from "@/app/lib/data";
import DataTable from "react-data-table-component";
import  {columns, paginationOptions} from "./tableOptions" 


export default function Group({params}:{ params: { idgroup: number }}){
    const [foodGroup, setFoodGroup] =useState([]);
    const idgroup=params.idgroup;
    const table_title="Alimentos del grupo "+`${idgroup}`;

    useEffect( ()=>{
        async function getData(){
            setFoodGroup(await fetchGroupFoods(idgroup));
        }
        getData();
    },[]);

    return(
        <DataTable
            title={table_title}
            columns={columns}
            data={foodGroup}
            keyField="idfood"
            highlightOnHover
            striped
            pointerOnHover
            pagination
            paginationComponentOptions={paginationOptions}
            responsive
            noDataComponent="No hay alimentos en este grupo."
            onRowDoubleClicked={alert}
            
        />
        /*
        <ul className="list-disc">
            {
                foodGroup.map((food: any, index: any)=>{
                    return (
                        <li key={food.idfood}>{food.idfood} - {food.eng_name}</li>
                    );
                } )
            }
        </ul>
        */ 
    );
}