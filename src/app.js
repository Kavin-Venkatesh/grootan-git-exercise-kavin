import express from 'express';
const app = express();

// Importing routes
import userRouter from './routes/user.routes.js';

app.use(express.json());

app.use('/api/users', userRouter);
app.get('/api/health' , (req, res) => {
    res.status(200).json({ message: 'OK' });
});


export default app;