// Login form component.
// Used for users to login to application and for admin route

export default function LoginForm({admin}:{admin: boolean}){
    // Prop "admin" to true/false to filter whether component is used in admin route ("/admin")
    // or for users access. Title and others visual details change. 
    const titleLogin="Acceda con su datos de usuario";
    const titleAdmin="Acceso al mantenimiento de usuarios";

    return (

    <div className="h-screen bg-gray-100 py-20 p-4 md:p-20 lg:p-32">
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Bienvenido</h2>
            <p className="text-gray-700 mb-6">{admin?titleAdmin:titleLogin}</p>
            <form action="">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email"
                        required
                        />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Contraseña" 
                        minLength={6}
                        required
                        />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Acceder
                    </button>
                    {!admin && (
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Problemas de acceso
                        </a>
                    )}
                </div>
                <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        </div>
            </form>
        </div>
    </div>
</div>
    );
}
