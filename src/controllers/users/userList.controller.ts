import { Request, Response } from "express";
import userListService from "../../services/users/userList.service";

const userListController = (req: Request, res: Response) => {
    try {
        const users = userListService()

        return res.send(users)

    } catch (err) {
        if(err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default userListController