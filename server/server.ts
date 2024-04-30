import express, { Application } from 'express';
import baseRoutes from './routes/baseRoutes'

const app: Application = express();

app.use('/', baseRoutes);

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});

