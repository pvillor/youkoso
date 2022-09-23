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
    telephone: string
    registerDate: Date
}