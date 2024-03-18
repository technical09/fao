import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { idgroup: string } }) {
    const idgroup: number = parseInt(params.idgroup);
    //console.log("idgroup: "+typeof(idgroup));
    try{
        const groupData = await prisma.alimentos.findMany({
            select:{
                idfood: true,
                eng_name: true,
                sci_name: true,
                pub_year: true,
            },
            where:{
                group_: idgroup,
            },
        });
        return NextResponse.json(groupData, {
            status: 200,
        });
    }
    catch(error){
        console.error(error);
        return Response.json(
            {error: "Failed to get group aliment data."},
            {status: 500},
        );
    }

}