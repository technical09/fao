import { useEffect, useState } from "react";
import { fetchFoodComponents } from "../lib/data";

export default function FoodComponents(props: any){
    const idfood=Number.parseInt(props.idfood);
    const [componentsData, setComponentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        async function getData() {
            try{
                const data=await fetchFoodComponents(idfood);
                setComponentsData(data);
                setIsLoading(false);
               //console.log("isLoading:",isLoading);
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
        {!isLoading && !error && componentsData && (
            componentsData.map( (item:any, index:any) =>
                <div className="">
                    <FoodComponent key={index} data={item.componentes} />
                </div>
            )
        )}

        {isLoading && !error && (
            <div className="flex justify-center p-4">
                <span>Cargando datos...</span>
            </div>
        )}
        {!isLoading && !error && componentsData.length === 0 && (
            <div className="flex rounded justify-center p-4 bg-red-300">
            <span>No se han encontrado datos para este alimento.</span>
        </div>
        )}
        </>
    );
}


export function FoodComponent(component: any){
    console.log("Datos:",component);
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