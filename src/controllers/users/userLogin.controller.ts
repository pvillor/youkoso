import { Request, Response } from "express"
import userLoginService from "../../services/users/userLogin.service"

const userLoginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const token = await userLoginService({email, password})

        return res.json({ token })

    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default userLoginController