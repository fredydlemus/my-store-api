const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello my server in express');
});

app.get('/new-route', (req, res) =>{
    res.send('New route');
})

app.get('/products', (req, res) =>{
    res.json({
        name: 'Product 1',
        price: 1000
    });
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
