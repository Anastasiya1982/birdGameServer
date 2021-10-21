import express from "express";
import { body } from "express-validator";

import authMiddleware from "../middlewares/auth-middleware.js";
import fileMiddleware from "../middlewares/multer-middleware.js";
import userController from "../controllers/user-controller.js";

const router = express.Router();

router.post(
    "/registration",
    body("name").isLength({ min: 2, max: 32 }),
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    userController.registration,
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/:id", userController.getOneUser);
router.get("/:id/edit", userController.editUser);
router.put("/update", authMiddleware, userController.updateUser);
router.post("/upload", fileMiddleware.single("avatar"), userController.uploadAvatar);

export default router;
