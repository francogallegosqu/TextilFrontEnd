import { UserType } from "./user-type";

export interface User {
    id: number,
    email: string,
    password: string,
    userType: UserType,
    businessName: string,
    document: string,
    employyes?: User[]
}
