import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactUpdateService from "../../services/contacts/contactUpdate.service";

const contactUpdateController = async (req: Request, res: Response) => {
    try {
        const { userEmail } = req
        const { id } = req.params
        const { name, email, telephone } = req.body
        if(id.length !== 36){
            throw new AppError(404, 'Contact not found')
        }

        const contact = await contactUpdateService(userEmail, id, name, email, telephone)

        return res.status(201).json(contact)

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactUpdateController