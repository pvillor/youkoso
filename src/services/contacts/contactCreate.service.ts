import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

const contactCreateService = async (userEmail: string, name: string, email: string, telephone: string) => {

    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            email: userEmail
        }
    })

    if(user){
        const contact = new Contact()
        contact.name = name
        contact.email = email
        contact.telephone = telephone
        contact.user = user

        contactRepository.create(contact)
        await contactRepository.save(contact)

        return contact
    }
}

export default contactCreateService