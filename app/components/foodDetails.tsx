'use client';

import { useEffect, useState } from "react";
import { fetchFoodDetails } from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FoodComponents from "./foodcomponents";


export default function FoodDetails(props: any){
    const [foodData, setFoodData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);
    const idfood=Number.parseInt(props.idfood);
    const router=useRouter();
    //console.log("FoodDetails idfood: "+idfood);

    useEffect( () => {
        async function getData() {
            try{
                const data =await fetchFoodDetails(idfood);
                setFoodData(data);
                setIsLoading(false);
                //console.log("FoodDetails:",foodData);
            }
            catch(error){
                console.error("ERROR: No se pudo obtener los datos del alimento.");
                setError("ERROR: No se pudo obtener los datos del alimento.");
                setIsLoading(false);

            }
        }
        getData();
    },[idfood]);

    return (
        <>
        <div className="flex justify-center p-2 rounded-md border border-neutral-600">
            {!isLoading && !error && foodData && foodData!=null && ( // Verificar si foodData está definido antes de acceder a sus propiedades
                <div className="flex flex-col p-2 justify-center w-full">
                    <div className="flex rounded-md p-2 bg-neutral-800 text-white justify-center">
                        <span className="text-xl">Datos Generales</span>
                    </div>
                    <div className="flex flex-col">
                        <table className="table-auto p-2 text-center w-full">
                            <thead>
                                <tr>
                                    <th>ID Alimento</th>
                                    <th>Nombre</th>
                                    <th>Nombre científico</th>
                                    <th>Grupo</th>
                                    <th>Subgrupo</th>
                                    <th>País muestra</th>
                                    <th>Especie</th>
                                    <th>Tipo</th>
                                    <th>Año publicación</th>
                                    <th>Versión</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{foodData.idfood}</td>
                                    <td>{foodData.eng_name}</td>
                                    <td>{foodData.sci_name||'N/A'}</td>
                                    <td>{foodData.grupo?.name}</td>
                                    <td>{foodData.subgroup||'N/A'}</td>
                                    <td>{foodData.country}</td>
                                    <td>{foodData.specie||'N/A'}</td>
                                    <td>{foodData.type||'N/A'}</td>
                                    <td>{foodData.pub_year}</td>
                                    <td>{foodData.last_rev}</td>
                                </tr>
                                <tr>
                                    <th>Procesado/Crudo</th>
                                    <th>Temporada</th>
                                    <th colSpan={7}>Otros</th>
                                </tr>
                                <tr>
                                    <td>{foodData.processing='p'?'Procesado':'Crudo'}</td>
                                    <td>{foodData.season||'N/A'}</td>
                                    <td colSpan={7}>{foodData.other||'N/A'}</td>
                                </tr>
                                <tr>
                                    <th colSpan={9}>Comentarios</th>
                                </tr>
                                <tr>
                                    <td colSpan={9}>{foodData.proc_comm||'N/A'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex mt-4 p-2 rounded-md bg-neutral-800 text-white justify-center">
                        <span className="text-xl">Componentes Asociados</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-2 overflow-y-auto max-h-screen">
                        <FoodComponents idfood={idfood}/>
                    </div>
                </div>
            )}
            {!isLoading && foodData==null && (
                <div className="flex flex-col justify-center w-1/4 border border-neutral-600 rounded mt-4 mb-4">
                    <div className="flex justify-center bg-neutral-600">
                        <span className="text-xl text-white">Aviso</span> 
                    </div>
                    <div className="flex justify-center p-4">
                        <span>No existe el alimento</span>
                    </div>
                </div>
            )}
            {!isLoading && error && (
                <div className="flex flex-col justify-center w-1/4 border border-red-600 rounded mt-4 mb-4">
                    <div className="flex justify-center bg-red-500">
                        <span className="text-xl text-white">Error</span> 
                    </div>
                    <div className="flex justify-center p-4">
                        <span>{error}</span>
                    </div>
                </div>
            )}
            {isLoading && !error && (
               <div className="flex justify-center p-4">
                    <span className="text-xl">Cargando datos...</span>
                </div>
            )}

        </div>
            <div className="flex flex-grow p-4 justify-center">
                <Link href="">
                <div className="flex-auto justify-center rounded-md border border-neutral-800 p-3 hover:bg-neutral-800 hover:text-white"
                onClick={router.back}>
                    <span className="text-lg p-2 tracking-wider">Volver</span>
                </div>
                </Link>
            </div>
        </>
    );
}