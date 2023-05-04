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
    res.render('projects/corpus', {layout: 'main'});
});
app.get('/valentine', (req, res) => {
    res.render('projects/valentine', {layout: 'main'});
});
app.get('/thesis', (req, res) => {
    res.render('projects/thesis', {layout: 'main'});
});
app.get('/blackout2', (req, res) => {
    // res.render('projects/blackout2', {layout: 'main'});
});
app.get('/linear-reprise', (req, res) => {
    res.render('projects/linear_reprise', {layout: 'main'});
});
app.get('/pg', (req, res) => {
    res.render('projects/pg', {layout: 'main'});
});
app.get('/pfn', (req, res) => {
    res.render('projects/pfn', {layout: 'main'});
});
app.get('/bedside-bartender', (req, res) => {
    res.render('projects/bedside_bartender', {layout: 'main'});
});
app.get('/scale', (req, res) => {
    res.render('projects/scale', {layout: 'main'});
});
app.get('/spectulative-ritual-1', (req, res) => {
    res.render('projects/spec-ritual-1', {layout: 'main'});
});
app.get('/pinwheel', (req, res) => {
    res.render('projects/pinwheel', {layout: 'main'});
});
app.get('/resume', (req, res) => {
    res.render('about/resume', {layout: 'main'});
});

app.get('/blog', (req, res) => {
    res.redirect('https://samheckle.github.io/blog/')
});

app.listen(8000);