// API route to get a foods list belonging to a given group (DB "alimentos" filtered by gruop)
// The result list includes selected fields from DB table "alimentos"
// This list is used when a group is selected from the main menu and consumed by
// the react-data-table-component

import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { idgroup: string } }) {
    // get idgroup from URL
    const idgroup: number = parseInt(params.idgroup);
    try{
        const groupData = await prisma.alimentos.findMany({
            // selected fields from DB. Can be modified or added new ones.
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