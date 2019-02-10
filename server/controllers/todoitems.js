import { TodoItem } from '../models';

/**
 * @description Class to create, updste and delete todos
 * @@return {undefined}
 */
export class TodoItemController {
    /**
     * @description controller function that handles creation of new todo items
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     * @return {undefined}
     */
    static createTodoItem(req, res) {
      const { content } = req.body;
      const { todoId } = req.params;

      TodoItem.create({
        content,
        todoId
      })
        .then(data => {
            res.status(201).json({
                status: 201,
                data,
                message: 'Todo item created successfully'
              });
        })
      .catch(error => res.status(400).send(error));
    }

    /**
     * @description controller function that updates a todo-item
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     * @return {undefined}
     */
    static updateTodoItem(req, res) {
        const { todoItemId, todoId } = req.params;
        const { content, complete } = req.body;

        TodoItem.find({
              where: {
                id: todoItemId,
                todoId,
              },
            })
          .then(todoItem => {
            if (!todoItem) {
              res.status(404).json({
                message: 'TodoItem Not Found',
              });
            } else {
                todoItem.update({
                content,
                complete
              })
              .then(updatedTodoItem => res.status(200).json(updatedTodoItem))
              .catch(error => res.status(400).json(error));
            }
          })
          .catch(error => res.status(400).json(error));
      }

    /**
     * @description controller function that deletes a todo-item
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     * @return {undefined}
     */
      static deleteTodoItem(req, res) {
        const { todoItemId, todoId } = req.params

        TodoItem.find({
              where: {
                id: todoItemId,
                todoId,
              },
            })
          .then(todoItem => {
            if (!todoItem) {
              return res.status(404).json({
                  status: 404,
                message: 'TodoItem Not Found',
              });
            } else {
                todoItem.destroy()
              .then(() => res.status(200).json({
                status: 200,
                message: 'Todo item deleted successfully'
              }))
              .catch(error => res.status(400).json({error}));
            }
          })
          .catch(error => res.status(400).json({error}));
      }
}
