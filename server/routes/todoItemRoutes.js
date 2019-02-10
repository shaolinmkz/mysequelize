import express from "express";
import { TodoItemController } from '../controllers';

const todoItemRoutes = express.Router();

todoItemRoutes.post("/v1/api/todos/:todoId/items", TodoItemController.createTodoItem);
// todoItemRoutes.get("/v1/api/todos/items", TodoItemController.getAllTodoItems);

export default todoItemRoutes;
