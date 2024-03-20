import Link from "next/link";
import NavLinks from "./navlinks";
import LogoQualitas from "./logo";
import NavLinks2 from "./navlinksb";

export default function SideNav(){
    return (
        <div>
            <div>
                <LogoQualitas />
            </div>
            <div>
                <NavLinks />
            </div>
        </div>
    );
}