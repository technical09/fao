// API route to get all data for a given food (DB table "alimentos" and related)

import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { idfood: string } }) {
    // get idfood from URL
    const idfood: number = parseInt(params.idfood);
    try{
        const foodData = await prisma.alimentos.findUnique({
            include:{
                alimentoscomponentes: {
                    include: {
                        componentes: true,
                    }
                },
                grupo: true,
                
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
            {error: "Failed to get food details."},
            {status: 500},
        );
    }

}