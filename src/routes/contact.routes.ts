import { Router } from "express"
import contactCreateController from "../controllers/contacts/contactCreate.controller"
import contactDeleteController from "../controllers/contacts/contactDelete.controller"
import contactListController from "../controllers/contacts/contactList.controller"
import contactRetrieveController from "../controllers/contacts/contactRetrieve.controller"
import contactUpdateController from "../controllers/contacts/contactUpdate.controller"
import { authUser } from "../middlewares/authUser.middleware"

const contactRoutes = Router()

contactRoutes.get('/contacts', authUser, contactListController)
contactRoutes.get('/contacts/:id', authUser, contactRetrieveController)
contactRoutes.post('/contacts', authUser, contactCreateController)
contactRoutes.patch('/contacts/:id', authUser, contactUpdateController)
contactRoutes.delete('/contacts/:id', authUser, contactDeleteController)

export default contactRoutes