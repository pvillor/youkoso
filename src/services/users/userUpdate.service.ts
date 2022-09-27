import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from '../../errors/appError'
import bcrypt from 'bcrypt'

const userUpdateService = async (email: string, name?: string, password?: string, telephone?: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const account = users.find( user => user.email === email )

    if(password){
        if(bcrypt.compareSync(password, account!.password)){
            throw new AppError(409, 'Inform a different password.')
        }

        const newPassword = bcrypt.hashSync(password, 10)

        await userRepository.update(account!.id, {
            password: newPassword
        })
    }

    if(name){
        await userRepository.update(account!.id, {
            name: name
        })
    }

    if(telephone){
        await userRepository.update(account!.id, {
            telephone: telephone
        })
    }

    return true

}

export default userUpdateService