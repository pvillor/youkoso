import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";
import { AppError, handleError } from '../../errors/appError'

const userCreateController = async (req: Request, res: Response) => {
    try {
        const {name, email, password, telephone} = req.body

        const registerDate = new Date()

        const newUser = await userCreateService({name, email, password, telephone, registerDate})

        return res.status(201).send(newUser)

    } catch (err) {
        if(err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userCreateController