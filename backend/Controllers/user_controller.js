import Users from "../Models/users";
import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generate_token";

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

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existUser = await Users.findOne(email);
  if (!existUser) {
    res.status(400);
    throw new Error("Aucun compte n'est associé à cet email");
  }

  if (existUser && existUser.matchPassword(password)) {
    generateToken(res, Users.id);
    const user = await Users.findByPk({
      id: existUser.id,
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(user);
  } else {
    res.status(401);
    throw new Error("Email ou mot de passe incorrect.");
  }
});

export const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Déconnexion..." });
});

export const getProfile = asyncHandler(async (req, res) => {});
