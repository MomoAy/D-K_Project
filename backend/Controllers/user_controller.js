import Users from "../Models/users.js";
import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generate_token.js";

export const register = asyncHandler(async (req, res) => {
  const { last_name, first_name, email, password } = req.body;

  if (last_name == "" || first_name == "" || email == "" || password == "") {
    res.status(400);
    throw new Error("Tous les champs doivent être rempli!");
  }

  const existUser = await Users.findOne({ where: { email: email } });
  if (existUser) {
    res.status(400);
    throw new Error(
      "Un utilisateur avec ce email existe déjà, si c'est vous, connectez-vous!!"
    );
  }

  const user = await Users.create({ last_name, first_name, email, password });
  if(!user){
    res.status(400);
    throw new Error("Une erreur est survenue lors de la création du compte. Veuillez réesayer");
  }

  res.status(201).json({ message: "Compte enregistré avec succès" });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existUser = await Users.findOne({ where: { email: email } });
  if (!existUser) {
    res.status(400);
    throw new Error("Aucun compte n'est associé à cet email");
  }

  if (await existUser.matchPassword(password)) {
    generateToken(res, existUser.id);
    const user = await Users.findOne({
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

export const getProfile = asyncHandler(async (req, res) => {
    const user = req.user;

    res.status(200).json(user);
});
