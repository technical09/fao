import React from "react";

export default function Header(){
    return (
        <header>
            <div className="flex flex-row w-full place-content-center items-center pt-4 gap-4 bg-black">
                <form action="" className="max-w-[480px] w-full px-4">
                    <div className="relative">
                        <input type="text" name="q" className="w-full border h-12 shadow p-4 rounded-full" placeholder="Búsqueda por componentes" />
                            <button type="submit">
                                
                            </button>
                    </div>
                </form>
            </div>
        </header>
    );
}