import userModel from "../models/user";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { Request, Response } from "express";
const objectId = mongoose.Types.ObjectId;

// ---------------------------------------------creer un utilisateur dans la bd---------------------------------------------

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const User = new userModel({ email, password });
    await User.save();

    res.status(200).json(User);
  } catch (error) {
    res.status(500).json(error);
  }
};
// ---------------------------------------afficher des utilisateurs dans la bqse de donnee---------------------------------------

export const GetAllUser = async (req: Request, res: Response) => {
  try {
    const Users = await userModel.find().select("-password");

    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json(error);
  }
};
// ---------------------------------------afficher des utilisateurs dans la base de donnee---------------------------------------

export const oneUser = async (req: Request, res: Response) => {
  if (!objectId.isValid(req.params.id)) {
    return res.status(300).send("id incoreect");
  }

  try {
    const Users = await userModel
      .findById({ _id: req.params.id })
      .select("-password");

    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ---------------------------------------afficher des utilisateurs dans la base de donnee---------------------------------------

export const deleteUser = async (req: Request, res: Response) => {
  if (!objectId.isValid(req.params.id)) {
    return res.status(300).send("id incoreect");
  }

  try {
    const Users = await userModel.deleteOne({ _id: req.params.id }).exec();

    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ---------------------------------------modifier un utilisateurs dans la base de donnee---------------------------------------

export const UpdateUser = async (req: Request, res: Response) => {
  if (!objectId.isValid(req.params.id)) {
    return res.status(300).send("id incoreect");
  }

  try {
    const Users = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          email: req.body.email,
        },
      }
    );

    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json(error);
  }
};
