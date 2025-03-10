import Tasks from "../Models/tasks.js";
import asyncHandler from "express-async-handler";

export const getAllTasksPerUser = asyncHandler(async (req, res) => {
  const user = req.user;
  const id = user.id;

  const tasks = await Tasks.findAll({
    where: { userId: id },
    attributes: { exclude: ["userId"] },
  });
  res.status(200).json(tasks);
});

export const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Tasks.findByPk(id);
  if (!task) {
    res.status(400);
    throw new Error("Impossible de mettre à jour une tâche qui n'existe pas");
  } else {
    res.status(200).json(task);
  }
});

export const addTask = asyncHandler(async (req, res) => {
  const { task } = req.body;
  const id = req.user.id;

  if (task == null) {
    res.status(400);
    throw new Error("La tache ne peut pas être vide!!");
  }

  await Tasks.create({ task, isComplete: false, userId: id });
  res.status(201).json({ message: "Tâche ajouté avec succès" });
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params; //Ici c'est l'id de la tâche
  const { task } = req.body;

  const existTask = await Tasks.findAll({ where: { id: id } });
  if (!existTask) {
    res.status(400);
    throw new Error("La tâche n'existe pas!!");
  }

  await Tasks.update({ task: task }, { where: { id: id } });
  res.status(202).json({ message: "Tâche mis à jour avec succès" });
});

export const updateStatusTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const existTask = await Tasks.findByPk(id);
  if (!existTask) {
    res.status(400);
    throw new Error("La tâche n'existe pas!!");
  }

  await Tasks.update(
    { isComplete: !existTask.isComplete },
    { where: { id: id } }
  );
  res.status(200).json({ message: "Tâche mis à jour avec succès" });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const existTask = await Tasks.findAll({ where: { id: id } });
  if (!existTask) {
    res.status(400);
    throw new Error("La tâche n'existe pas!!");
  }

  await Tasks.destroy({ where: { id: id } });
  res.status(400).json({ message: "Tâche supprimé avec succès" });
});
