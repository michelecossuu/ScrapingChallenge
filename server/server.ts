import express, { Application } from 'express';
import mongoose from 'mongoose';
import baseRoutes from './routes/baseRoutes';

import { dbUri } from './utils/constant';

const app: Application = express();

app.use('/', baseRoutes);

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
    try {
        connectToDb();
    } catch(err) {
        console.log(err);
    }
});

async function connectToDb() {
    try {
        await mongoose.connect(dbUri);
        console.log("Connect to MongoDB");
    } catch(err) {
        console.error('Error: ' + err);
    }
};