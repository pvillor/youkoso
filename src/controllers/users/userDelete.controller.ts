import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userDeleteService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
    try {

        const email = req.userEmail

        const user = await userDeleteService(email)

        return res.json({ message: 'User deleted!'})

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userDeleteController