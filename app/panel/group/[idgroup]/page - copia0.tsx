// traer de la ruta el idgroup
export default async function Group({ params }: any){
    const {idgroup}= params;
    const url="http://localhost:3000/api/group/"+idgroup;
    const getGroup = async () => {
        const res = await fetch(url);
        return res.json();  
    }

    const grupos=await getGroup();
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
}