import { User } from '../../entities/user.entity'
import { IUserCreate } from '../../interfaces/users'
import { AppDataSource } from '../../data-source'

const userCreateService = async ({name, email, telephone}: IUserCreate) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email == email)

    if(emailAlreadyExists){
        throw new Error('Email already exists')
    }

    const user = new User()
    user.name = name
    user.email = email
    user.telephone = telephone

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService