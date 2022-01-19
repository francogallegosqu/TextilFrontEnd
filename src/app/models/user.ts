import { UserType } from "./user-type";

export interface User {
    id?: number,
    email: string,
    password: string,
    businessName: string,
    type_document: string,
    number_document: string,
    address: string,
    idCity: string,
    idRole: string;
}
