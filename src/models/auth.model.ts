export interface ILoginResponse {
    token: string;
    message: string;
}

export interface IUser {
    email: string;
    password: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface IRegisterResponse {
    message: string;
    user: IUser;
    token: string;
}
