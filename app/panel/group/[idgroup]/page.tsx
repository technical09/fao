'use client';

import { useEffect, useState } from "react";
import { fetchGroupFoods, getGroupsApi } from "@/app/lib/data";
import DataTable from "react-data-table-component";
import { columns, paginationOptions } from "./tableOptions";
import { useRouter } from "next/navigation";

export default function Group({ params }: { params: { idgroup: number } }) {
    const router = useRouter();
    const idgroup = params.idgroup;
    const [foodGroup, setFoodGroup] = useState([]);
    const [groupData, setGroupData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const table_title = "Alimentos grupo " + `${idgroup}`+" - ";

    useEffect(() => {
        async function getData() {
            try {
                // Cargar todos los alimentos del grupo
                const foods = await fetchGroupFoods(idgroup);
                setFoodGroup(foods);
                
                // Primero cargar todos los grupos
                // Filtrar el grupo con el idgroup deseao
                const groups = await getGroupsApi();
                const grupo= groups.find((group: any) => group.idgroup == idgroup);
                setGroupData(grupo.name);

                setIsLoading(false); // Marcar como no cargando
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }
        getData();
    }, []);

    return (
        <>
            {!isLoading && groupData && (
                <DataTable
                    title={table_title+groupData}
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
                    onRowClicked={row => router.push(`/panel/food/${row.idfood}`)}
                />
            )}
            {isLoading && 
                <div className="flex justify-center p-6">
                    <p className="text-lg">Cargando datos...</p>
                </div>
            }
            {!isLoading && !groupData && 
                <div className="flex justify-center p-6">
                    <p className="text-lg">No se encontraron datos.</p>
                </div>
            }
        </>
    );
}
