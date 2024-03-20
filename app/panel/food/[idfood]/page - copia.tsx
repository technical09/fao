import FoodDetails from "@/app/components/food";

export async function  getFood(idfood:number) {
    const res = await fetch(`http://localhost:3000/api/food/${idfood}`);
    if(!res.ok){
        throw new Error("No se pudo acceder a los datos del alimento.");
    }
    return res.json();
}

export default async function Food( {params}: any ){
    //const data = await getFood(params.idfood);
    //console.log(params.idfood);
    //console.log("Data: "+JSON.stringify(data));
    const idfood: number = Number.parseInt(params.idfood);

    return (
        <>
        <h1>Información del alimento {idfood}</h1>
           <FoodDetails idfood={idfood} />
        </>
    );
        
}