// Login route to access users
// Will be default route if user is not login
// ** TODO **

import LoginForm from "../components/loginform";
import LogoApp from "../components/logo";

export default function Home(){
    return (
        <div className="flex flex-col p-0">
            <LogoApp />
            <LoginForm admin={false}/>
        </div>
    );
}