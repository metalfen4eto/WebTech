import * as mongoose from 'mongoose';
import User from '../schemas/UserSchema'
import Project from '../schemas/ProjectSchema'


const connectDB = () => {
    return mongoose.connect(`${process.env.DATABASE_URL}`, { useUnifiedTopology: true , useNewUrlParser: true});
}

const models = {Project, User};
export {connectDB};
export default models;