const express = require('express');
const path = require('path');

const app = express();

// Adding custom Express.js middleware
app.use((req, res, next) => {
// Add your custom logic here
console.log('Custom middleware');
next();
});

// Serve static assets for Angular application
app.use(express.static(path.join(__dirname, 'dist/your-app-name')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory for view files (relative to the project root)
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', (_req, res) => {
res.render('home', { activePage: 'home', headerActivePage: 'home' });
});

app.get('/home', (_req, res) => {
res.render('home', { activePage: 'home', headerActivePage: 'home' });
});

app.get('/about', (_req, res) => {
res.render('about', { activePage: 'about' });
});

app.get('/project', (_req, res) => {
res.render('project', { activePage: 'project' });
});

app.get('/services', (_req, res) => {
res.render('services', { activePage: 'services' });
});

app.get('/contact', (_req, res) => {
res.render('contact', { activePage: 'contact' });
});

app.use(express.static(path.join(__dirname, 'public')));

// Listening on the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log('Server is running on port ${port}');
});