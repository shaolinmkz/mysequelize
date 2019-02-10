import express from "express";
import { TodoController } from '../controllers';

const todoRoutes = express.Router();

todoRoutes.post("/v1/api/todos", TodoController.createTodo);
todoRoutes.get("/v1/api/todos", TodoController.getAllTodos);
todoRoutes.get("/v1/api/todos/:todoId", TodoController.getSpecificTodo);

export default todoRoutes;
