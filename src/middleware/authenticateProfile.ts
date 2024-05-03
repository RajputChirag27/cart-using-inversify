import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "src/interfaces/AuthenticationInterface";

import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config()
import { IUser } from "src/interfaces/UserRepositoryInterface";
import ProfileModel from "src/models/Profile.model";
import { Profile } from "src/interfaces/ProfileInterface";
import UserModel from "src/models/User.model";



// Middleware to authenticate the user
 function authenticateProfileToken (req : AuthenticatedRequest, res : Response , next : NextFunction) {
  // const authHeader = req.headers['authorization'];
  const token = req.cookies.token1;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided.");
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY!, async (err : any, decoded : any) => {
    if (err) {
      console.error("JWT verification error:", err);
      return res.status(403).send("Forbidden: Invalid token.");
    }
    req.profile = decoded;
    const userId = await UserModel.find({_id: req.profile.userId})
    const profileId = await ProfileModel.find({_id : req.profile.profileId})
    if(userId && profileId){
      next();
    } else{
      res.send("User Not Found");
    }
  });
}



export default authenticateProfileToken;