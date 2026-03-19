const express = require('express');
const router = express.Router();
const db = require('../services/dbService');

router.get('/', (req, res) => {
    const users = db.readDB();
    res.render('main', { users, clickable: false });
});

router.get('/add', (req, res) => {
    const users = db.readDB();
    res.render('add', { users, clickable: true });
});

router.post('/add', (req, res) => {
    const { name, number } = req.body;

    db.addUser(name, number);

    res.redirect('/');
});

router.get('/update', (req, res) => {
    const users = db.readDB();
    const user = users.find(u => u.id == req.query.id);

    res.render('update', {
        users,
        user,
        clickable: true
    });
});

router.post('/update', (req, res) => {
    const { id, name, number } = req.body;

    db.updateUser(id, name, number);

    res.redirect('/');
});

router.delete('/delete/:id', (req, res) => {
    db.deleteUser(req.params.id);

    res.redirect('/');
});

module.exports = router;
