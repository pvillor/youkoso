import { Request, Response } from "express"
import userRetrieveService from "../../services/users/userRetrieve.service"

const userRetrieveController = async (req: Request, res: Response) => {
    try {
        const user = await userRetrieveService({authorization: req.headers.authorization})

        return res.send(user)

    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                'error': err.name,
                'message': err.message
            })
        }
    }
}

export default userRetrieveController