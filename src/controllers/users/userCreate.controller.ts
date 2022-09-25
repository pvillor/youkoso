import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
    try {
        const {name, email, password, telephone} = req.body

        const registerDate = new Date()

        const newUser = await userCreateService({name, email, password, telephone, registerDate})

        return res.status(201).send(newUser)

    } catch (err) {
        if(err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default userCreateController