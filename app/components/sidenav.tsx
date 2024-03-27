// Lateral menu used en main page
// include logo and navlinks components

import NavLinks from "./navlinks";
import LogoApp from "./logo";


export default function SideNav(){
    return (
        <div>
            <div>
                <LogoApp />
            </div>
            <div>
                <NavLinks />
            </div>
        </div>
    );
}