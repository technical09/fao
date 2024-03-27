// Client component
// Renders a table using react-data-table-component with all foods that belong to a specific group
// react-data-table-component (https://react-data-table-component.netlify.app/)
// third party component that makes easy to render a table from an array or JSON
// ** TODO ** adjust columns to include in table and css for visual adjustment

'use client';

import { useEffect, useState } from "react";
import { fetchGroupFoods, getGroupsApi } from "@/app/lib/data";
// import react-data-table-component. Should be installed (npm install react-data-table-component)
import DataTable from "react-data-table-component";
import { columns, paginationOptions } from "./tableOptions";
import { useRouter } from "next/navigation";

export default function Group({ params }: { params: { idgroup: number } }) {
    // Get idgroup from URL
    const idgroup = params.idgroup;
    // Define router to be able to push and navigate to URLs
    const router = useRouter();
    // var to get all foods for a specific group (array)
    const [foodGroup, setFoodGroup] = useState([]);
    // var to get data from API for a specific group (idgroup and name)
    const [groupData, setGroupData] = useState(null);
    // Manage loading state
    const [isLoading, setIsLoading] = useState(true);
    // title for data-table
    const table_title = "Alimentos grupo " + `${idgroup}`+" - ";

    useEffect(() => {
        async function getData() {
            try {
                // Cargar todos los alimentos del grupo
                const foods = await fetchGroupFoods(idgroup);
                setFoodGroup(foods);
                
                // Obtener información de todos los grupos
                const groups = await getGroupsApi();
                // Filtrar el grupo con el idgroup deseao para obtener el nombre del grupo y poder mostrarlo en el título
                const grupo= groups.find((group: any) => group.idgroup == idgroup);
                setGroupData(grupo.name);

                setIsLoading(false); // Cambiar estado a false (no cargando, ya se ha cargado)
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }
        getData();
    }, []);

    return (// Render react-data-table-component. When a row is clicked, load specific food page info
        <>
            {!isLoading && groupData && ( // Info ya cargada y groupData existe y tiene datos
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
            {isLoading && // Mientras se carga la información y no está disponible para mostrar
                <div className="flex justify-center p-6">
                    <p className="text-lg">Cargando datos...</p>
                </div>
            }
            {!isLoading && !groupData && // No está definido ni tiene datos groupData por lo que no se pudieron recuperar de la BD
                <div className="flex justify-center p-6">
                    <p className="text-lg">No se encontraron datos.</p>
                </div>
            }
        </>
    );
}
