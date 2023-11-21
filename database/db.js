import mongoose from 'mongoose';

const Connection = async () => {

    try {
        await mongoose.connect('mongodb+srv://somaudaykiran:Uday@cluster0.4ek7fgv.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          
        console.log('Database Connected Succesfull');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;