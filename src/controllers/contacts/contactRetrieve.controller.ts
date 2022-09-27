import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError"
import contactRetrieveService from "../../services/contacts/contactRetrieve.service";

const contactRetrieveController = async (req: Request, res: Response) => {
    try {
        const { userEmail } = req
        const { id } = req.params
        if(id.length !== 36){
            throw new AppError(404, 'Contact not found')
        }

        const contact = await contactRetrieveService(userEmail, id)

        return res.json(contact)

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactRetrieveController