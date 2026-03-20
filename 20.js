const express = require('express');
const path = require('path');
const handlebars = require('./config/handlebars');
const userRoutes = require('./routes/users');

const app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');//

const publicPath = path.join(__dirname, 'views', 'public');
app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
