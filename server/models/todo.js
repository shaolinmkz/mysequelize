export default (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Todo title field cannot be empty',
        },
        len: {
          args: [2, 200],
          msg: 'Todo title characters must be minimum 2 and maximum 200',
        },
      },
    },
  }, {});

  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };
  return Todo;
};
