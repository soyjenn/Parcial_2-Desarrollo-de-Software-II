const express = require("express");
const router = express.Router();
const service = require("./service");

// Crear tarea
router.post("/", (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = service.create(title, description, dueDate);
  res.status(201).json(task);
});

// Listar o filtrar por estado
router.get("/", (req, res) => {
  const { status } = req.query;
  res.json(service.list(status));
});

// Actualizar estado
router.patch("/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  res.json(service.updateStatus(Number(id), status));
});

// Eliminar tarea
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  service.delete(Number(id));
  res.status(204).send();
});

// Ver tareas vencidas
router.get("/overdue", (req, res) => {
  res.json(service.listOverdue(new Date()));
});

module.exports = router;
