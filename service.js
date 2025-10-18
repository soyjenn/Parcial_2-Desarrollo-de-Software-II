const { Task, TaskStatus } = require("./model");
const repo = require("./repository");

const service = {
  create(title, description, dueDate) {
    const task = new Task(title, description, dueDate);
    return repo.save(task);
  },

  list(status) {
    return repo.findAll(status);
  },

  updateStatus(id, status) {
    const task = repo.findById(id);
    if (!task) throw new Error("Tarea no encontrada");
    task.status = status;
    return repo.save(task);
  },

  delete(id) {
    repo.delete(id);
  },

  listOverdue(today) {
    return repo.findOverdue(today);
  },
};

module.exports = service;
