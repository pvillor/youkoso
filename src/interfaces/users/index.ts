export interface IUser {
    id: string
    name: string
    email: string
    telephone: string
    registerDate: number
}

export interface IUserCreate {
    name: string
    email: string
    telephone: string
    registerDate: number
}