const port = 8000;
const cors = require("cors")
const express = require("express")
const dbName = "Pirate-db";


require("./config/Pirate.config")(dbName);

const app = express();

app.use(express.json());
app.use(cors());


require("./routes/Pirate.routes")(app);


app.listen(port, ()=>{console.log(`Listening to ${port} for request and response.`);})