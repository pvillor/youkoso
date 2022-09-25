import { Router } from "express"
import userCreateController from "../controllers/users/userCreate.controller"
import userListController from "../controllers/users/userList.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import userRetrieveController from "../controllers/users/userRetrieve.controller"

const routes = Router()

routes.get('/users', userListController)
routes.get('/users/me', userRetrieveController)
routes.post('/users', userCreateController)
routes.post('/users/login', userLoginController)

export default routes