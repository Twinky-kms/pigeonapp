const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser:dbpass@cluster0-qbmx5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("pgn").collection("social");
  return collection, function(callback) {
    if(callback) {
        //once we receieve a call back close db connection.
        client.close();
    }
  };
  // perform actions on the collection object
  client.close();
});
