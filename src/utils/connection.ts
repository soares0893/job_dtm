import { Db, MongoClient } from "mongodb";

interface ConnectType {
    db: Db
    client: MongoClient
}

//const client = new MongoClient(process.env.DATABASE_URL)
const client = new MongoClient('mongodb+srv://job_dtm:123@cluster0.iyx5r.mongodb.net/test')

export default async function Connect() {
    await client.connect();

    const db = client.db('job_dtm')
    return { db, client }
}