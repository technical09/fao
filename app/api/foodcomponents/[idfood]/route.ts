import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params: {idfood: string}}) {
    const idfood: number=Number.parseInt(params.idfood);
    try{
        const data=await prisma.alimentoscomponentes.findMany({
            where:{
                idfood: idfood,
            },
            include:{
                componentes: true,
            },
        })
        if (data.length === 0) {
            return NextResponse.json(null, {status: 200});
        }
        return NextResponse.json(data, {status: 200});
    }
    catch (error){
        console.error(error);
        return Response.json(
            {error: "Failed to get food components."},
            {status: 500},
        );
    }
}