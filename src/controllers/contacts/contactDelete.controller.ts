import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError"
import contactDeleteService from "../../services/contacts/contactDelete.service";

const contactDeleteController = async (req: Request, res: Response) => {
    try {
        const { userEmail } = req
        const { id } = req.params
        if(id.length !== 36){
            throw new AppError(404, 'Contact not found')
        }

        const contact = await contactDeleteService(userEmail, id)

        return res.json({message: 'Contact deleted.'})

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default contactDeleteController