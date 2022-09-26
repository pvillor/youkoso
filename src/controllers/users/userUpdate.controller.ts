import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
    try {

        const email = req.userEmail

        const { name, password, telephone } = req.body

        if(req.body.email){
            throw new Error('You cannot update email!')
        }

        if(!req.body.name || !req.body.password || !req.body.telephone){
            throw new Error('Invalid data.')
        }

        const user = await userUpdateService(email, name, password, telephone)

        return res.json({message: 'Data updated!'})

    } catch (err) {
        if(err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default userUpdateController