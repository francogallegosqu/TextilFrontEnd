import { UserType } from "./user-type";

export interface User {
    id?: number,
    idUsuario?: string,
    email?: string,
    password?: string,
    businessName?: string,
    type_document?: string,
    number_document?: string,
    address?: string,
    created_at?: string,
    updated_at?: string,
    created_by?: string,
    role?: any,
    city?: any,
    productions?: any[],
    userType?: UserType,
    document?: string,
    employyes?: User[]
}