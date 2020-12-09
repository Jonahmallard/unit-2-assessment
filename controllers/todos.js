const todos = require('../data/todos');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
}

function index(req, res) {
    res.render('index', {title: 'Unit 2 Assessment', todos});
}

function create(req, res) {
    todos.push(req.body.todo);
    res.redirect('/');
}

function deleteOne(req, res) {
    todos.splice(req.params.id, 1);
    res.redirect('/');
}

function update(req, res) {
    todos[req.params.id] = req.body.todo;
    res.redirect('/');
}