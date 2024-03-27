// 

import FoodDetails from "@/app/components/foodDetails";
import { Suspense } from "react";

export default async function Food( {params}: any ){
    // get idfood from URL and parse to number type
    const idfood: number = Number.parseInt(params.idfood);
    
    return (// renders <FoodDetails> for specific idfood (clicked from table in group/idgroup route)
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
}