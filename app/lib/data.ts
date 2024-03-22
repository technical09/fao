import prisma from "./prisma";

export async function getGroupsApi() {
  const res=await fetch('http://localhost:3000/api/groups');
  if (!res.ok){
    throw new Error("No se pudo obtener el listado de grupos desde la API.");
  }
  const data_res = await res.json();
  return data_res;
  //console.log(groups);
}

export async function fetchGroupFoods(idgroup:number) {
  const res=await fetch(`http://localhost:3000/api/group/${idgroup}`);
  if(!res.ok){
    throw new Error("No se pudo obtener la información del Grupo desde la API.");
  }
  const data= await res.json();
  return data;
}

export async function fetchFoodDetails(idfood:number) {
  const res=await fetch(`http://localhost:3000/api/food/${idfood}`);
  if(!res.ok){
    throw new Error("No se pudo obtener la informmación del Alimento desde la API.")
  }
  const data=await res.json();
  return data;
}

export async function fetchGroupInfo(idgroup: number){
  const res=await prisma.grupo.findUnique({
    where:{
      idgroup: idgroup,
    },
  });
  if(!res){
    throw new Error("No se pudo obtener la información del grupo.");
  }
  console.log("Función grupo: "+res);
  return res;
}

export async function getGroupsServer() {
  const groups=await prisma.grupo.findMany();
  console.log("Data server: "+Object.keys(groups));
  return groups;
}