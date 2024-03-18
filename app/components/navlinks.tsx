import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import prisma from "../lib/prisma"
import Link from "next/link";

async function getGroups() {
  const groups=await prisma.grupo.findMany();
  return groups;
}


export default async function NavLinks(){
  const groups=await getGroups();
  //console.log("Datos: "+Object.keys(groups));
  return (
    <>
    <Link
      href="/search">
    <span className="text-xl p-4 pb-4">Buscador</span>
    </Link>
    <ul>
      <li><span className="text-xl p-4 pb-4">Grupos de Alimentos</span></li>
      {groups.map((g) => (
        <li className="pl-4 p-" key={g.idgroup}>
          <Link
            href={`/panel/group/${g.idgroup}`}
          >
            <span>{g.name}</span>
          </Link>
        </li>
      )
      )}
    </ul></>
  );
}