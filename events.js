
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// const apiURL = '/';
// const students = {
//   name: 'Abhishek',
//   uid: '22BCS16819',
//   university: 'Chandigarh University',
//   filename: 'info.js'
// };

// app.get(apiURL, (req, res) => {
//   res.send(students);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request body

const apiURL = '/'
app.post(apiURL, (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!(isNaN(item))) {
            const num = Number(item);
            num % 2 === 0 ? even_numbers.push(item) : odd_numbers.push(item);
        } else{
            alphabets.push(item.toUpperCase());
        }
    });

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        odd_numbers,
        even_numbers,
        alphabets
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
