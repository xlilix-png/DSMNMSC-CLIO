const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://shiva:shiva@cluster0.do0cdb4.mongodb.net';
const client = new MongoClient(uri);

const dbName = 'apis';
const collectionName = 'botapis';

async function connectToMongo() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    console.log('\x1b[31m%s\x1b[0m', '|    ✅ Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

module.exports = { connectToMongo, client };
