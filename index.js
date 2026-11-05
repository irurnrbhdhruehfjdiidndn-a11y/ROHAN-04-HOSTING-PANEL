'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        name: 'ROHAN 04 HOSTING PANEL',
        status: 'Online',
        version: '1.0.0'
    });
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'Running',
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

app.get('/', (req, res) => {
    res.send('ROHAN 04 HOSTING PANEL SERVER RUNNING');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`ROHAN 04 SERVER RUNNING ON PORT ${PORT}`);
});
