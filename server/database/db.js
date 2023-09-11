import mongoose from "mongoose";



    const Connection = async (USERNAME , PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-39d6gez-shard-00-00.5apa8sr.mongodb.net:27017,ac-39d6gez-shard-00-01.5apa8sr.mongodb.net:27017,ac-39d6gez-shard-00-02.5apa8sr.mongodb.net:27017/?ssl=true&replicaSet=atlas-xywpf0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try { 
       await mongoose.connect(URL , { useNewUrlParser: true });
       console.log('Database connected Succesfully');
    } catch (error) {
        console.log('Error while connecting with the database' , error);
    }
};
export default Connection;