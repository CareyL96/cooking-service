const express = require('express');
const path = require('path');
const axios = require('axios');
const bodparser = require('body-parser');
// const db = require('../database/index.js');

const app = express();



const port = 2700;

app.listen(port, () => console.log('listening on port ', port));
