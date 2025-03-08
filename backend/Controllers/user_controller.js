import Users from "../Models/users";
import asyncHandler from "express-async-handler";

export const register = asyncHandler(async (req, res) => {
  const { last_name, first_name, email, password } = req.body;

  if (last_name == "" || first_name == "" || email == "" || password == "") {
    res.status(400);
    throw new Error("Tous les champs doivent être rempli!");
  }

  const existUser = Users.findAll({ where: { email: email } });
  if (existUser) {
    res.status(400);
    throw new Error(
      "Un utilisateur avec ce email existe déjà, si c'est vous, connectez-vous!!"
    );
  }

  Users.create({ last_name, first_name, email, password });
  res.status(201).json({ message: "Compte enregistré avec succès" });
});

export const login = asyncHandler(async (req, res) => {});

export const logout = asyncHandler(async (req, res) => {});

export const getProfile = asyncHandler(async (req, res) => {});
