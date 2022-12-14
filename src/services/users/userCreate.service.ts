import { User } from '../../entities/user.entity'
import { IUserCreate } from '../../interfaces/users'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../errors/appError'
import bcrypt from 'bcrypt'

const userCreateService = async ({name, email, password, telephone}: IUserCreate) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email == email)

    if(emailAlreadyExists){
        throw new AppError(409, 'Email already exists')
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password, 10)
    user.telephone = telephone

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService