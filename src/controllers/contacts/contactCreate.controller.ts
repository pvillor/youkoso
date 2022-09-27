import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactCreateService from "../../services/contacts/contactCreate.service";

const contactCreateController = async (req: Request, res: Response) => {
    try {
        const { userEmail } = req
        const { name, email, telephone } = req.body
        const contact = await contactCreateService(userEmail, name, email, telephone)

        return res.status(201).json(contact)

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactCreateController