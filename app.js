const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    res.render('./index');
});

app.get('/about', (req, res) => {
    res.render('./about')
});

app.get('/contact', (req, res) => {
    res.render('./contact')
});

app.use((req, res) => {
    res.status(404).render('./404', { title: '404' })
});

app.listen(8080)





