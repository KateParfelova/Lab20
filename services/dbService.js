const fs = require('fs');

const filePath = 'db.json';

function readDB() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

function writeDB(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function addUser(name, number) {
    const DB = readDB();

    const newUser = {
        id: DB.length ? DB[DB.length - 1].id + 1 : 1,
        name,
        number
    };

    DB.push(newUser);
    writeDB(DB);
}

function updateUser(id, name, number) {
    const DB = readDB();

    for (let i = 0; i < DB.length; i++) {
        if (Number(DB[i].id) === Number(id)) {
            DB[i] = { id, name, number };
        }
    }

    writeDB(DB);
}

function deleteUser(id) {
    let DB = readDB();
    DB = DB.filter(user => Number(user.id) !== Number(id));
    writeDB(DB);
}

module.exports = {
    readDB,
    addUser,
    updateUser,
    deleteUser
};
