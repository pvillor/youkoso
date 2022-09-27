import { Router } from "express"
import userCreateController from "../controllers/users/userCreate.controller"
import userDeleteController from "../controllers/users/userDelete.controller"
import userListController from "../controllers/users/userList.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import userRetrieveController from "../controllers/users/userRetrieve.controller"
import userUpdateController from "../controllers/users/userUpdate.controller"
import { authUser } from "../middlewares/authUser.middleware"

const userRoutes = Router()

userRoutes.get('/users', authUser, userListController)
userRoutes.get('/users/me', authUser, userRetrieveController)
userRoutes.post('/users', userCreateController)
userRoutes.post('/users/login', userLoginController)
userRoutes.patch('/users/me', authUser, userUpdateController)
userRoutes.delete('/users/me', authUser, userDeleteController)

export default userRoutes