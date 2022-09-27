import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError"
import contactListService from "../../services/contacts/contactList.service";

const contactListController = async (req: Request, res: Response) => {
    try {
        const { userEmail } = req

        const contact = await contactListService(userEmail)

        return res.json(contact)

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactListController