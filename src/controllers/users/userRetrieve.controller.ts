import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import userRetrieveService from "../../services/users/userRetrieve.service"

const userRetrieveController = async (req: Request, res: Response) => {
    try {
        const email = req.userEmail

        const user = await userRetrieveService(email)

        return res.send(user)

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userRetrieveController