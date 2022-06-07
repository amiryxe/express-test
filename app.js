console.clear();


import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// clear the console on every request
app.use((req, res, next) => {
    console.clear();
    next();
});

app.route('/test')
    .get((req, res) => {
        res.send('<h1>this is get req to main page</h1>');
        console.log(req.query)
    })
    .post((req, res) => {
        console.log(req.body)
        res.status(203)

        res.send({
            id: 'test'
        })
    })

app.listen(3000, () => {
    console.log("Server is running on port 3000 http://localhost:3000");
})