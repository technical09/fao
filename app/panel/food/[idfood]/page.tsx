import FoodDetails from "@/app/components/foodDetails";
import { Suspense } from "react";

export default async function Food( {params}: any ){
    //console.log("food que recibe idfood y carga componente FoodDetails: "+params.idfood);
    const idfood: number = Number.parseInt(params.idfood);
    
    return (
        <>
        <div className="flex p-6 flex-col justify-center">
            <div className="flex flex-col rounded-md p-4 md:p-6 justify-center">
                <Suspense>
                    <FoodDetails idfood={idfood} />
                </Suspense>
            </div>
        </div>
        </>
    );
    
    //<span className="text-2xl p-4">Información del alimento {idfood}</span>
}