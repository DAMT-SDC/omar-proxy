const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors')
const port = 1212;

app.use(morgan('dev'));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
 