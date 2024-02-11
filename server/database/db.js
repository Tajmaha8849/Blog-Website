import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://{username}:{password}@ac-nyo0him-shard-00-00.cqsyxhg.mongodb.net:27017,ac-nyo0him-shard-00-01.cqsyxhg.mongodb.net:27017,ac-nyo0him-shard-00-02.cqsyxhg.mongodb.net:27017/?ssl=true&replicaSet=atlas-84vf1f-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
