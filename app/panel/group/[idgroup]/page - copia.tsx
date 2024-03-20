import Link from "next/link";

// traer de la ruta el idgroup
export default async function Group({ params }: any){
    const {idgroup}= params;
    const url="http://localhost:3000/api/group/"+idgroup;
    const getGroup = async () => {
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error("No se pudo descargar los datos de la API.");
            }
            return res.json();  
        }
        catch(error){
            console.log("Error de getGroup:" +error);
        }
    }

    const grupo=await getGroup();
    const grupoN=Object.keys(grupo).length;

    return (
        <>
            <h1>Listado de alimentos grupo {idgroup}</h1>
            <div className="flex w-full">
            <table className="w-100 table-auto border-collapse border border-slate-400 border-spacing-2">
                <thead>
                    <th className="p-2 border border-slate-300 bg-neutral-800 text-white">Id</th>
                    <th className="p-2 border border-slate-300 bg-neutral-800 text-white">Nombre</th>
                    <th className="p-2 border border-slate-300 bg-neutral-800 text-white">Nombre científico</th>
                    <th className="p-2 border border-slate-300 bg-neutral-800 text-white">Año</th>
                </thead>
                <tbody>
                    {
                        grupo.map( (item: any, index: any) => {
                           return (
                            <>
                            <tr key={index} className="even:bg-neutral-200">
                                <td className="p-2 border border-slate-300">{item.idfood}</td>
                                <td className="p-2 pl-4 border border-slate-300">{item.eng_name}</td>
                                <td className="p-2 border border-slate-300">{item.sci_name}</td>
                                <td className="p-2 border border-slate-300">{item.pub_year}</td>
                            </tr>
                            </>
                           );
                        })
                    }
                </tbody>
            </table>
            </div>
            <div className="flex flex-grow border w-fit right-0">
                <Link href="/" className="p-1 hover:bg-neutral-800 hover:text-white border-black">1</Link>
                <Link href="/" className="p-1 hover:bg-neutral-800 hover:text-white border-black">2</Link>
                <Link href="/" className="p-1 hover:bg-neutral-800 hover:text-white border-black">3</Link>
                <Link href="/" className="p-1 hover:bg-neutral-800 hover:text-white border-black">4</Link>
            </div>
        </>
	);
   
   /*
    return (
        <>
        <h1>Listado grupo {idgroup}</h1>
        <ul>
            {
                grupos.map( (item: { idfood: string }, index: number) => {
                    return <li key={index}>{item.idfood}</li>
                } )
            }
        </ul>
        </>
    );
    */
}