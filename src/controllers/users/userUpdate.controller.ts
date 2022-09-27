import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
    try {

        const email = req.userEmail

        const { name, password, telephone } = req.body

        if(req.body.email){
            throw new AppError(403, 'You cannot update email!')
        }

        if(!req.body.name && !req.body.password && !req.body.telephone){
            throw new AppError(400, 'Invalid data.')
        }

        const user = await userUpdateService(email, name, password, telephone)

        return res.json({message: 'Data updated!'})

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userUpdateController