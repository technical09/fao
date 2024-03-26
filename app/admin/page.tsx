import LoginForm from "../components/loginform";


export default function Home(){
    return(
        <div className="flex flex-col bg-gray-100">
            <div className="flex justify-center pt-8">
                <span className="text-2xl">Interfaz de administración de usuarios</span>
            </div>
            <div>
                <LoginForm admin={true}/>
            </div>
        </div>
    );
}