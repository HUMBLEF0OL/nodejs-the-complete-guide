
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("in the middleware");
//     // next function allows the function to jump to the next middleware
//     next();
// });

app.use((req, res, next) => {
    console.log('in the next middleware');
    res.send("<h1>Test</h1>");
})

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);