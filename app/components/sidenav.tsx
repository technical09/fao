import Link from "next/link";
import NavLinks from "./navlinks";
import LogoQualitas from "./logo";

export default function SideNav(){
    return (
        <div>
            <div className="flex flex-row-reverse bg-black w-screen">
                <span className="text-gray-50 p-2 al">Usuario</span>
                <span className="text-gray-50 p-2 al">Salir</span>
            </div>
            <div>
                <LogoQualitas />
            </div>
            <div>
                <NavLinks />
            </div>
        </div>
    );
}