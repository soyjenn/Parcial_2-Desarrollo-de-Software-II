const tasks = [];

const repository = {
  save(task) {
    const index = tasks.findIndex(t => t.id === task.id);
    if (index >= 0) tasks[index] = task;
    else tasks.push(task);
    return task;
  },

  findAll(status) {
    return status ? tasks.filter(t => t.status === status) : tasks;
  },

  findById(id) {
    return tasks.find(t => t.id === id);
  },

  delete(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index >= 0) tasks.splice(index, 1);
  },

  findOverdue(today) {
    return tasks.filter(
      t => t.dueDate && new Date(t.dueDate) < today && t.status !== "DONE"
    );
  },
};

module.exports = repository;
