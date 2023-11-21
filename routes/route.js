import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser ,addAdmin,getAdminById,editAdmin,deleteAdmin} from '../controller/user-controller.js';


const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);


router.post('/admin', addAdmin);
router.get('/:id', getAdminById);
router.put('/:id', editAdmin);
router.delete('/:id', deleteAdmin);

export default router;