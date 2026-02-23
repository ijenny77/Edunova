let express = require("express")
let bodyParser = require("body-parser")
let app = express();
app.use(bodyParser.urlencoded({extended:true}))
let path = require("path")

let port = 3000

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.post("/submit-student-data",(req,res)=>{
    let name = req.body.firstName + " "+ req.body.lastName;
    res.send(`${name} Submitted successfully`)
})

let server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})