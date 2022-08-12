const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello Beautiful People");
});

app.listen(PORT,() => {
    console.log(`App up at port ${PORT}`);
});