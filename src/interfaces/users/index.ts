export interface IUser {
    id: string
    name: string
    email: string
    telephone: string
    registerDate: Date
}

export interface IUserCreate {
    name: string
    email: string
    password: string
    telephone: string
    registerDate: Date
}

export interface IUserLogin {
    email: string
    password: string
}