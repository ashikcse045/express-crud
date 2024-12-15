import mongoose from "mongoose";
import 'dotenv/config'

const dbUsername = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;
const dbCluster = process.env.MONGO_CLUSTER_NAME;
const dbName = process.env.MONGO_DB_NAME;

const mongoUri = `mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}.lqk9k.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=crud-app`

const mongoConnection = async () => {
    try {
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log(err);
    }
}

export default mongoConnection;