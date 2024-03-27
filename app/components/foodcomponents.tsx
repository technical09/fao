// Component to render alls components included in a specific food
// It recieves an idfood, consult an API route that exposes all components used by the food
// and all info associated to the component (name, unit, comments,...)

// Declares a sub-component <FoodComponent> that recieves all info about every food component a render a 
// individual card for every food component

import { useEffect, useState } from "react";
import { fetchFoodComponents } from "../lib/data";

export default function FoodComponents(props: any){
    // Get idfood from URL
    const idfood=Number.parseInt(props.idfood);
    // vars to store components info from DB API route, loading state and errors
    const [componentsData, setComponentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        async function getData() {
            // get components used by a food (using its idfood)
            try{
                const data=await fetchFoodComponents(idfood);
                setComponentsData(data);
                // setIsLoading to false onces setComponentsData got data
                setIsLoading(false);
            }
            catch(error){
                console.error("ERROR: No se pudo obtener los datos de los componentes.");
                setError("ERROR: No se pudo obtener los datos de los componentes.");
                setIsLoading(false);
            }
        }
        getData();
    },[idfood])

    return (
        <>
        {!isLoading && !error && componentsData && ( // Filter loading and error state, and whether componentsData has any data
            // extract any element from the array of elements and call <FoodComponent that renders the info from the food component and values
            componentsData.map( (item:any, index:any) =>
                <div className="">
                    <FoodComponent key={index} data={item.componentes} />
                </div>
            )
        )}

        {isLoading && !error && ( // Show <div> when loading data and componentsData is not yet available
            <div className="flex justify-center p-4">
                <span>Cargando datos...</span>
            </div>
        )}
        {!isLoading && !error && componentsData.length === 0 && ( // Filter componentsData array have elements 
            <div className="flex rounded justify-center p-4 bg-red-300">
            <span>No se han encontrado componentes para este alimento.</span>
        </div>
        )}
        </>
    );
}


export function FoodComponent(component: any){
    return(
        <div className="flex flex-col border border-neutral-400 rounded-md shadow-sm w-auto">
            <div className="flex bg-neutral-700 text-white justify-center p-1">
                <span>{component.data.long_name} ({component.data.idcomp})</span>
            </div>
            <div className="flex gap-x-4 p-1">
                <label htmlFor="name">Nombre: </label>
                <input className=""
                    disabled
                    id="name"
                    width={component.data.name.toString().lenght}
                    value={component.data.name}
                    />
            </div>
            <div className="flex gap-x-4 p-1">
                <label htmlFor="unit">Unidad:</label>
                <input className="w-1/4" 
                    disabled
                    id="unit"
                    value={component.data.unit}
                    />
            </div>
            <div className="flex flex-col p-1">
                <label htmlFor="comments">Comentarios:</label>
                <input
                    disabled
                    id="comments"
                    value={component.data.comments}
                    />
            </div>
        </div>
    );
}