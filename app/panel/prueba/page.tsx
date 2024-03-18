const getData = async () => {
    const url="http://localhost:3000/api/group/1";
    const res = await fetch(url);
    if(!res.ok){
        throw new Error("Fallo al obtener los datos de la API");
    }
    return res.json();  
}

export default async function Prueba(){
    const data=await getData();

    return (
        <>
           <h1>Probando...</h1>
           <span>Listado</span> 
            <ul>
           {
            data.map( (item: any, index:number)=>{
               return <li key={index}>{item.idfood}</li>
               //console.log("Map: "+index + "  |  "+item.idfood);
            })
           }
           </ul>
        </>
    );
}