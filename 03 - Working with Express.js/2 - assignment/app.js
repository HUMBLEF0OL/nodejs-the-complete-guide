const express = require('express');
const path = require('path');
const parentRoute = require('./routes/main');
const usersRoute = require('./routes/users')

const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(usersRoute);
app.use(parentRoute);


app.listen(3000);