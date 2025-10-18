let nextId = 1;

const TaskStatus = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
};

class Task {
  constructor(title, description, dueDate) {
    this.id = nextId++;
    this.title = title;
    this.description = description || "";
    this.dueDate = dueDate || null;
    this.status = TaskStatus.PENDING;
  }
}

module.exports = { Task, TaskStatus };
