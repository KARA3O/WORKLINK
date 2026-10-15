const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const { notFound, errorHandler } = require('./middleware/error.middleware');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok', app: 'WorkLink' }));

app.use('/api/auth', authRoutes);

// TODO: mount more routes here later (jobs, applications, reviews, notifications)

app.use(notFound);
app.use(errorHandler);

module.exports = app;
