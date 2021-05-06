
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/mop-angular-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mop-angular-app/'}),
);


app.listen(process.env.PORT || 8080);