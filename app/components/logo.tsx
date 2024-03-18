import Image from "next/image";

export default function LogoQualitas(){
    return(
        <div className="flex flex-col justify-center items-center p-4 bg-gray-100">
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