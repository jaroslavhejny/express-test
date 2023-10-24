const experss = require("express");
const app = experss();

const port = 1208;

app.get("/", (request, response) => {
    const randomNumber = Math.round(Math.random()*100).toString();
    response.send(randomNumber)
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})