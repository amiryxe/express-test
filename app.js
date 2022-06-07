import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// clear the console on every request
app.use((req, res, next) => {
    console.clear();
    console.log('hi');
    next();
});

app.listen(3000, () => {
    console.log("Server is running on port 3000 http://localhost:3000");
})