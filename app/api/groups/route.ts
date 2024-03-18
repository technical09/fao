import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try{
        const groups = await prisma.grupo.findMany();
        return NextResponse.json(groups, {
            status: 200,
        });
    }
    catch(error){
        return Response.json(
            {error: "Failed to get groups."},
            {status: 500},
        );
    }

}