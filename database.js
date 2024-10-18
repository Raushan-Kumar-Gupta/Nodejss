const { MongoClient } = require("mongodb");

url =
  "mongodb+srv://raushang714:IsEjZHLNe4yNG8I3@gutennodejs.kfndy.mongodb.net/";

const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db("SchoolXYZ");
  const collection = db.collection("Users");

//   const data = {
//     firstName: "Samip",
//     lastName: "Shah",
//     city: "KTM",
//     degree: "btech_mechanical",
//   };

//   const insertResult = await collection.insertMany([
//    data
//   ]);
//   console.log("Inserted documents =>", insertResult);

const deleteResult = await collection.deleteMany({firstName:"Samip"});
console.log('Deleted documents =>', deleteResult);


// const updateResult = await collection.updateOne(data, { $set: { firstName: "Sahill" } });
// console.log('Updated documents =>', updateResult);

  const findResult = await collection.find({}).toArray();
  console.log("found_document=>", findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
