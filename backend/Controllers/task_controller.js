import Tasks from "../Models/tasks.js";

export async function getAllTasksPerUser(req, res) {
  const { id } = req.params; //je précise pour vous mais c'est pass l'id de la tache masi celui de l'utilisateur

  const tasks = Tasks.findAll({ where: { userId: id } });
  res.status(200).json(tasks);
}

export async function getTask(req, res) {
  const { id } = req.params;

  const task = await Tasks.findAll({ where: { id: id } });
  if (!task) {
    res.status(400);
    throw new Error("Impossible de mettre à jour une tâche qui n'existe pas");
  } else {
    res.status(200).json(task);
  }
}

export async function addTask(req, res) {
  const { task } = req.body;

  if (task == null) {
    res.status(400);
    throw new Error("La tache ne peut pas être vide!!");
  }

  await Tasks.create({ task, isComplete: false });
  res.status(201).json({ message: "Tâche ajouté avec succès" });
}

export async function updateTask(req, res) {
  const { id } = req.params; //Ici c'est l'id de la tâche
  const { task } = req.body;

  const existTask = await Tasks.findAll({ where: { id: id } });
  if (!existTask) {
    res.status(400);
    throw new Error("La tâche n'existe pas!!");
  }

  await Tasks.update({ task: task }, { where: { id: id } });
  res.status(202).json({ message: "Tâche mis à jour avec succès" });
}

export async function updateStatusTask(req, res) {
  const { id } = req.params;

  const existTask = await Tasks.findAll({ where: { id: id } });
  if (!existTask) {
    res.status(400);
    throw new Error("La tâche n'existe pas!!");
  }

  await Tasks.update(
    { isComplete: !existTask.isComplete },
    { where: { id: id } }
  );
  res.status(200).json({ message: "Tâche mis à jour avec succès" });
}

export async function deleteTask(req, res) {
  const { id } = req.params;

  const existTask = await Tasks.findAll({ where: { id: id } });
  if (!existTask) {
    res.status(400);
    throw new Error("La tâche n'existe pas!!");
  }

  await Tasks.destroy({ where: { id: id } });
  res.status(400).json({ message: "Tâche supprimé avec succès" });
}
