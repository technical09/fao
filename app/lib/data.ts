import prisma from "./prisma";

export async function getGroupsApi() {
  const res=await fetch('http://localhost:3000/api/groups');
  const data_res = await res.json();
  
  
  //console.log(groups);
}

export async function getGroupsServer() {
  const groups=await prisma.grupo.findMany();
  console.log("Data server: "+Object.keys(groups));
  return groups;  
}