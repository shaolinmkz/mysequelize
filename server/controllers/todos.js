import { Todo, TodoItem } from '../models';

/**
 * @description Class to create, updste and delete todos
 * @return {undefined}
 */
export class TodoController {
    /**
     * @description controller function that handles creation of new todos
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @return {undefined}
     */
    static createTodo(req, res) {
      const { title } = req.body;

      Todo.create({
        title
      })
        .then(data => {
            res.status(201).json({
                status: 201,
                data,
                message: 'Todo created successfully'
              });
        })
      .catch(error => res.status(400).send(error));
    }

    /**
     * @description controller function that get all todos
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @return {undefined}
     */
    static getAllTodos(req, res) {
        Todo.findAll({
            include: [{
              model: TodoItem,
              as: 'todoItems',
            }]
          })
          .then(todos => res.status(200).json({
              todos
            }))
          .catch(error => res.status(400).json({
              error
            }));
      }

    /**
     * @description controller function that get a specific todo
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     * @return {undefined}
     */
      static getSpecificTodo(req, res) {
          const { todoId } = req.params;
        Todo
          .findById(todoId, {
            include: [{
              model: TodoItem,
              as: 'todoItems',
            }],
          })
          .then(todo => {
            if (!todo) {
              res.status(404).json({
                status: 404,
                message: 'Todo Not Found',
              });
            } else {
                res.status(200).json({
                    todo
                });
            }
          })
          .catch(error => res.status(400).send(error));
      }
}
