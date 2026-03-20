const expressHandlebars = require('express-handlebars');

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        exit: () => "document.location='/'"
    }
});


module.exports = handlebars;
