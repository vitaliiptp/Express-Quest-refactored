const express = require('express');
const app = express();
const { setupRoutes } = require('./routes');

app.use(express.json());

setupRoutes(app);

const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});