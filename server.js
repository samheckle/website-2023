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
    // res.render('home', {layout: 'main'});
    res.redirect('/bio')
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
app.get('/reaction', (req, res) => {
    res.render('projects/reaction', {layout: 'main'});
});

// engine().registerHelper('filter-sem', (v)=>{
//     if(v == ){

//     }
// })

app.get('/classes', (req, res) => {
    let classes = {
        spring24: [{name: "net-media", url: "https://github.com/samheckle/networked-media-sp-24"}, {name: "exp-coding"}, "capstone"],
        fall23: ["icm", "creativeml", "exp-coding"],
        spring23: ["net-media", "blursed"]
    }
    res.render('classes', {layout: 'main', classes: classes});
});
app.get('/resume', (req, res) => {
    res.render('about/resume', {layout: 'main'});
});
app.get('/bio', (req, res) => {
    res.render('about/bio', {layout: 'main'});
});

app.get('/blog', (req, res) => {
    res.redirect('https://samheckle.github.io/blog/')
});
app.get('/hosted', (req, res) => {
    res.redirect('samheckle.github.io/hosted/')
});

app.listen(8000, ()=>{
    console.log('http://localhost:8000')
});