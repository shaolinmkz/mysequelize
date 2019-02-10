import express from "express";
import { TodoItemController } from '../controllers';

const todoItemRoutes = express.Router();

todoItemRoutes.post("/v1/api/todos/:todoId/items", TodoItemController.createTodoItem);
todoItemRoutes.put("/v1/api/todos/:todoId/items/:todoItemId", TodoItemController.updateTodoItem);
todoItemRoutes.delete("/v1/api/todos/:todoId/items/:todoItemId", TodoItemController.deleteTodoItem);

export default todoItemRoutes;
