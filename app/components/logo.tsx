import Image from "next/image";

export default function LogoApp(){
    return(
        <div className="flex justify-center items-center bg-gray-100 p-0">
              <Image
                src="/next.svg"
                alt="Logo"
                className="object-cover w-40 h-40 mb-8 rounded-full"
                width={40}
                height={40}
                />
        </div>
    );
}