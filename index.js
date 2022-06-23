const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const ObjectId = require("mongodb").ObjectId;
app.use(cors());
app.use(express.json());
// pw: E3o5KJZg495gjbiE
// user : practicecrud 


//  const collection = client.db("crudoperation").collection("practice1");

const uri = "mongodb+srv://practicecrud:E3o5KJZg495gjbiE@cluster0.gatn8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
     await client.connect();
     const collection = client.db("crudoperation").collection("practice1");
     app.get("/details",async (req,res)=>{
        const result=await collection.find().toArray();
        res.send(result);
     })
     app.get("/details/:_id",async(req,res)=>{
        const id =req.params._id;
        const query = { _id: ObjectId(id) };
      const result = await collection.findOne(query);
      res.json(result);
      console.log(result);
     })
    }
    finally{

    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })