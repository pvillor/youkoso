import { Request, Response } from "express";
import userDeleteService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
    try {

        const email = req.userEmail

        const user = await userDeleteService(email)

        return res.json({ message: 'User deleted!'})

    } catch (err) {
        if(err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default userDeleteController