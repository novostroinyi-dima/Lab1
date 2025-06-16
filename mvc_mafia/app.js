const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { showIndex, addPlayer } = require('./controllers/gameController');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', showIndex);
app.post('/add-player', addPlayer);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
