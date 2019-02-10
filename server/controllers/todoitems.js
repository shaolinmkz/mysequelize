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
}
