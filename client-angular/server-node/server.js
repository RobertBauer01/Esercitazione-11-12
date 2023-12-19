// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Serve images
app.use('/client-angular/images', express.static(path.join(__dirname, '/workspace/Esercitazione-11-12/client-angular/images')));

// Set our api response
app.get('/mb', (req, res) => {
    var jsonData = {
        "results": [
            {
                "description": "Image of a mountain bike",
                "image": "/client-angular/images/bike1.jpg"
            },
        ]
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

    app.get('/rb', (req, res) => {
        var jsonData = {
            "results": [
                {
                    "description": "Image of a mountain bike",
                    "image": "/images/bike2.jpg"
                },
            ]
        };
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
    });

    app.get('/cb', (req, res) => {
        var jsonData = {
            "results": [
                {
                    "description": "Image of a city bike",
                    "image": "bike3.jpg"
                },
            ]
        };
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
    });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
res.send('Add to the link of the website (/mb/rb/cb) to view the corresponding pages');
//res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || '4200';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 4200!');});