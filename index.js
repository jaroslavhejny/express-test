const experss = require("express");
const cors = require('cors');
const app = experss();

app.use(cors());

const port = 1208;

app.get("/:max?", (request, response) => {
    const max = request.params.max || 100;
    const randomNumber = Math.round(Math.random()*max).toString();
    response.send({number: randomNumber, max: max.toString()})
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})