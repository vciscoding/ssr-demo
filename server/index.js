const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>hello world</title>
            </head>
            <body>
                <div>hello world</div>
            </body>
        </html>
    `)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));