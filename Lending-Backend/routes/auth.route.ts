import { Router } from "express";
import { authValidation } from "../validations";
import validate from "../middlewares/validate";
import { authController } from "../controllers";
import upload from "../middlewares/multer";
const router = Router();

router.post("/login", validate(authValidation.login), authController.login);
router.post(
  "/register",
  upload.single("id_proof"),
  validate(authValidation.register),
  authController.register
);

// router.put("/forgot-password");

export default router;

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                format: email
 *              password:
 *                type: string
 *                format: password
 *            example:
 *              email: fake@example.com
 *              password: password1
 *    responses:
 *      "200":
 *        description: OK
 *      "401":
 *        description: Invalid email or password
 */

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Register
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                format: email
 *              password:
 *                type: string
 *                format: password
 *            example:
 *              email: fake@example.com
 *              password: password1
 *    responses:
 *      "200":
 *        description: OK
 *      "401":
 *        description: Invalid email or password
 */
