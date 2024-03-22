'use client';

import { useEffect, useState } from "react";
import { fetchFoodDetails } from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function FoodDetails(props: any){
    const [foodData, setFoodData] = useState<any>(null);
    const idfood=Number.parseInt(props.idfood);
    const router=useRouter();
    //console.log("FoodDetails idfood: "+idfood);

    useEffect( () => {
        async function getData() {
            const data =await fetchFoodDetails(idfood);
            //setData(await fetchFoodDetails(idfood));
            setFoodData(data);
        }
        getData();
    },[idfood]);

    return (
        <>
        <div className="p-2 rounded-md border border-neutral-600">
            {foodData && ( // Verificar si foodData está definido antes de acceder a sus propiedades
                <div className="border p-2 justify-center">
                    <table className="table-auto p-2 text-center">
                        <thead>
                            <tr>
                                <th>ID Alimento</th>
                                <th>Nombre</th>
                                <th>Nombre científico</th>
                                <th>Grupo</th>
                                <th>Subgrupo</th>
                                <th>País muestra</th>
                                <th>Tipo</th>
                                <th>Año publicación</th>
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
                                <td>{foodData.type||'N/A'}</td>
                                <td>{foodData.pub_year}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <div className="border p-2">
                <span>Otro...</span>
            </div>
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