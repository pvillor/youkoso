import { users } from '../../database'
import { IUserCreate, IUser } from '../../interfaces/users'
import { v4 as uuidv4 } from 'uuid'

const userCreateService = ({name, email, telephone, registerDate}: IUserCreate) => {
    const emailAlreadyExists = users.find(user => user.email == email)

    if(emailAlreadyExists){
        throw new Error('Email already exists')
    }

    const newUser: IUser = {
        id: uuidv4(),
        name,
        email,
        telephone,
        registerDate: Date.now()
    }

    users.push(newUser)

    return newUser

}

export default userCreateService