import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { idfood: string } }) {
    const idfood: number = parseInt(params.idfood);
    try{
        const foodData = await prisma.alimentos.findMany({
            select:{
                idfood: true,
                eng_name: true,
                sci_name: true,
                pub_year: true,
            },
            where:{
                idfood: idfood
            },
        });
        return NextResponse.json(foodData, {
            status: 200,
        });
    }
    catch(error){
        console.error(error);
        return Response.json(
            {error: "Failed to get food data."},
            {status: 500},
        );
    }

}