// Server component that get a list with all foods groups from DB table "grupo"
// and generate a <ul> list with a link to every single group

import prisma from "../lib/prisma"
import Link from "next/link";

// Call function to access DB
async function getGroups() {
  const groups=await prisma.grupo.findMany();
  return groups;
}


export default async function NavLinks(){
  const groups=await getGroups();
  
  return (
    <>
    <div className="flex rounded-md hover:bg-black hover:text-white">
    <Link
      href="/search">
    <span className="text-xl p-4 pb-4 ">Buscador</span>
    </Link>
    </div>
    <ul className="list-disc">
      <li><span className="text-xl p-4 pb-4">Grupos de Alimentos</span></li>
      {
      // get all results from "groups" 
      groups.map((g) => (
        <li className="pl-4" key={g.idgroup}>
          <div className="rounded-md p-1 hover:bg-black hover:text-white">
          <Link
            href={`/panel/group/${g.idgroup}`}
          >
           <span>- {g.name}</span>
          </Link>
        </div>
        </li>
      )
      )}
    </ul></>
  );
}