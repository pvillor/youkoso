import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const contactUpdateService = async (userEmail: string, id: string, name: string, email: string, telephone: string) => {
  const userRepository = AppDataSource.getRepository(User)
  const contactRepository = AppDataSource.getRepository(Contact)

  const users = await userRepository.find()
  const account = users.find( user => user.email === userEmail)

  const contact = await contactRepository.findOneBy({ id })

  if (!contact) {
    throw new AppError(404, "Contact not found.")
  }

  if(account?.contacts.some(contact => contact.id === id)){
    const newContact = {
      name: name || contact.name,
      email: email || contact.email,
      telephone: telephone || contact.telephone,
    }

    await contactRepository.update(contact!.id, {
      ...newContact
    })

    return { id: contact.id, ...newContact }
  }

  throw new AppError(404, "Contact not found.")
}

export default contactUpdateService