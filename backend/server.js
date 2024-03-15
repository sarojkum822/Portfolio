const express = require('express');
const colors = require('colors');
const dataBase = require('./config/db');
const User = require('./Modals/userSchema'); 
const cors = require('cors');
const notes = require('./data/notes');

const PORT = process.env.PORT || 3000;

dataBase(); 

const app = express();
app.use(express.json());
app.use(cors());


app.post('/addprojects', async (req, res) => {
    try {

        const { projectName, skills, details, date ,github}=req.body;

        const newUser = new User({
            projectName,
            date,
            details,
            github,
            skills

        });
        
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/projects', async (req, res) => {
    try {
        // Fetch all projects from the database
        const projects = await User.find({});
        res.status(200).json(projects);
        
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});








app.listen(PORT, () => {
    console.log(colors.green(`Server is running on port ${PORT}`));
});
