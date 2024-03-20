import prisma from "../lib/prisma";

interface Props{
    idfood: number
}

export async function getData(idfood: number){
    const res=await fetch(`http:localhost:3000/api/food/${idfood}`);
    if (!res.ok){
        throw new Error("No su pudo acceder al información de la API.");
    }
    return res.json();
}

export default async function FoodDetails(props: Props){
    const idfood=props.idfood;
    const data=await getData(idfood);

    return(
        <table className="table-auto">
            <thead>
                <th>id</th>
                <th>Nombre</th>
                <th>Nombre Científico</th>
            </thead>
            <tbody>
                <tr>
                    {
                        data.map((item: any, index: any) => {
                            return (
                                <>
                                <td>{item.idfood}</td>
                                <td>{item.eng_name}</td>
                                <td>{item.sci_name}</td>
                                </>
                            );
                        }

                        )
                    }
                </tr>
            </tbody>
        </table>
    );
}