import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const contactRetrieveService = async (email: string, id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const users = await userRepository.find()
    const account = users.find(user => user.email === email)

    const contact = await contactRepository.findOneBy({ id })

    if (!contact) {
        throw new AppError(404, "Contact not found.")
    }

    if(account?.contacts.some(contact => contact.id === id)){

        return contact
    }

    throw new AppError(404, "Contact not found.")
}

export default contactRetrieveService