import { MongoClient, ObjectId } from "mongodb";
import { mongoURI } from "./secrets.js";


const dbName = "c11-practice";
const collectionName = "mySecond"

const mongoConnect = new MongoClient(mongoURI);
await mongoConnect.connect();


const db = mongoConnect.db(dbName);

const dataDocument = {
    "id": 10,
    "name": "Scallion",
    "price": 0.99,
    "type": "produce",
    "isBought": true
}
//CRUD: Insert/Create
// const resultInsert = await db.collection(collectionName).insertOne(dataDocument);

//CRUD: Read
const resultRead = await db.collection(collectionName)
.find({})
.limit(5)
.toArray();

////CRUD: Update
const resultUpdate = await db.collection(collectionName)
    .updateOne(
        {_id: new ObjectId("648b5b8d05bbe9c9284d8305")},
        {$set: {name: "Updated Name"}}
    )



//CRUD: delete
// const resultDelete = await db.collection(collectionName)
//         .deleteOne({_id: new ObjectId("648b5b8d05bbe9c9284d8303")})

//console.log results
console.log(resultRead)
// console.log(resultInsert);
// console.log(resultDelete);

mongoConnect.close();

