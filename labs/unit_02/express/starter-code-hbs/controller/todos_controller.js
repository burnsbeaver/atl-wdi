const express = require('express');
const router = express.Router();
const todosData = require('../data');

router.get('/', (req,res)=> {
  res.render('todos/index', {
    todos: todosData.seededTodos,
  });
});

router.get('/new', (req, res)=> {
  res.render('todos/new')
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todoNumber = todosData.seededTodos[id]
  console.log(todoNumber);
  res.render('todos/show', {
    todo: todoNumber
  });
});

router.post('/', (req, res)=> {
  const newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  todosData.seededTodos.push(newTodo)
  res.redirect('/todos')
})




module.exports = router;
