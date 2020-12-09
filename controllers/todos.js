const todos = require('../data/todos');

module.exports = {
    index,
    create
}

function index(req, res) {
    res.render('index', {title: 'Unit 2 Assessment', todos});
}

function create(req, res) {
    todos.push(req.body.todo);
    res.redirect('/');
}