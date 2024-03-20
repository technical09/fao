import { alimentos, componentes,grupo, alimentoscomponentes } from "@prisma/client";

export type Result = {
    message: string;
    data: alimentos|componentes|grupo|alimentoscomponentes;
}

export type AlimentosTipo = {
    data: alimentos & {componentes: alimentoscomponentes};
}