import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Tell Express to look in the "public" folder for any files first
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.render('home', {layout: false});
    res.render('home', {layout: 'main'});
});
app.get('/corpus', (req, res) => {
    // res.render('home', {layout: false});
    res.render('projects/corpus', {layout: 'main'});
});

app.listen(8000);