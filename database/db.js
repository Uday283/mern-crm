import mongoose from 'mongoose';

const Connection = async () => {

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          
        console.log('Database Connected Succesfull');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;