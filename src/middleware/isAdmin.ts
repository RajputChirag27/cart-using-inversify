import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "src/interfaces/AuthenticationInterface";
import { IUser } from "../interfaces/UserRepositoryInterface";
import UserModel from "../models/User.model";
const isAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const user : IUser = await UserModel.findOne({email : req.user.email});
        if (!user || user.role !== 'admin') {
            res.status(403).send("Not Permitted because you are not an Admin");
        } else {
            next();
        }
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        res.status(500).send("Internal Server Error");
    }
}

export default isAdmin;