import { Router } from "express"
import userCreateController from "../controllers/users/userCreate.controller"
import userDeleteController from "../controllers/users/userDelete.controller"
import userListController from "../controllers/users/userList.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import userRetrieveController from "../controllers/users/userRetrieve.controller"
import userUpdateController from "../controllers/users/userUpdate.controller"
import { authUser } from "../middlewares/authUser.middleware"

const routes = Router()

routes.get('/users', authUser, userListController)
routes.get('/users/me', authUser, userRetrieveController)
routes.post('/users', userCreateController)
routes.post('/users/login', userLoginController)
routes.patch('/users/me', authUser, userUpdateController)
routes.delete('/users/me', authUser, userDeleteController)

export default routes