// Functions to access database and API routes
// Will be imported by routes that need to access DB

import prisma from "./prisma";
import { users } from "@prisma/client";

// List food groups from API (table Grupos in DB)
export async function getGroupsApi() {
  const res=await fetch('http://localhost:3000/api/groups');
  if (!res.ok){
    throw new Error("No se pudo obtener el listado de grupos desde la API.");
  }
  const data_res = await res.json();
  return data_res;
}

// Get all foods that belong to a food group fro API (table alimentos in DB filter by group)
export async function fetchGroupFoods(idgroup:number) {
  const res=await fetch(`http://localhost:3000/api/group/${idgroup}`);
  if(!res.ok){
    throw new Error("No se pudo obtener la información del Grupo desde la API.");
  }
  const data= await res.json();
  return data;
}

// Get details for single food from API (table alimentos in DB filter by idfood)
export async function fetchFoodDetails(idfood:number) {
  const res=await fetch(`http://localhost:3000/api/food/${idfood}`);
  if(!res.ok){
    throw new Error("No se pudo obtener la informmación del Alimento desde la API.")
  }
  const data=await res.json();
  return data;
}

// Get all components for a single food from API
export async function fetchFoodComponents(idfood: number){
  const res=await fetch(`http://localhost:3000/api/foodcomponents/${idfood}`);
  if(!res.ok){
    throw new Error(`No se pudo obtener la información de los componentes para ${idfood} desde la API.`)
  }
  const data=await res.json();
  return data;
}

// Get all foods that contain a component from API
export async function fetchFoodsByComponent(){
  // TODO if needed
}

// Get user by email (TODO: future use for Auth)
export async function getUserFromDb(email: string):Promise<users|null>{
  const res =await  prisma.users.findUnique({
    where:{
      email: email,
    }
  });
  if(!res){
    console.error("No se pudo obtener la información del usuario.");
    throw new Error("No se pudo obtener la información del usuario.");
  }
  return res;
}


// Get info for single group (table grupos in DB filter by isgroup)
export async function fetchGroupInfo(idgroup: number){
  const res=await prisma.grupo.findUnique({
    where:{
      idgroup: idgroup,
    },
  });
  if(!res){
    throw new Error("No se pudo obtener la información del grupo.");
  }
  return res;
}


// Get group list from DB (not API)
export async function getGroupsServer() {
  const groups=await prisma.grupo.findMany();
  console.log("Data server: "+Object.keys(groups));
  return groups;
}