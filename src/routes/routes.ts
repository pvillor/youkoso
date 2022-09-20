import { Router } from "express"
import userCreateController from "../controllers/users/userCreate.controller"
import userListController from "../controllers/users/userList.controller"

const routes = Router()

routes.get('/users', userListController)
routes.post('/users', userCreateController)

export default routes