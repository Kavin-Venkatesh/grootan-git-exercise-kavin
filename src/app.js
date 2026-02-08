import express from 'express';
const app = express();

// Importing routes
import userRouter from './routes/user.routes.js';
import settingsRouter from './routes/settings.routes.js';

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/settings', settingsRouter);

app.get('/api/health' , (req, res) => {
    res.status(200).json({ message: 'OK' });
});


export default app;