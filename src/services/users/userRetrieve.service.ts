import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRetrieve } from "../../interfaces/users";
import jwt from 'jsonwebtoken'

const userRetrieveService = async ({ authorization }: IUserRetrieve) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    if(!authorization){
        throw new Error('Authorization token not found')
    }

    const token = authorization.split('')[1]

    const account = jwt.verify(token, String(process.env.JWT_SECRET), (err, decoded) => {
        if(!decoded){
            throw new Error('Invalid token')
        }

        const user = users.find(user => user.email === (<any>decoded).email)

        return user
    })

    return account
}

export default userRetrieveService