const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("first middleware");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("another middleware");
//     res.send("<h2>Test</h2>");
// })

app.use('/users', (req, res, next) => {
    console.log("users");
    res.send("users");
})

app.use('/', (req, res, next) => {
    console.log("parent route");
    res.send("parent route");

})

app.listen(3000);