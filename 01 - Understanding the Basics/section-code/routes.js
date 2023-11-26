const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/message" method="POST">
                <input type='text' name='surname'/>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>`
    )
    res.end();
  } else if (url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFileSync('message.text', parsedBody);
      res.statusCode = 302;
      res.setHeader("Location", '/');

      return res.end();
    })


  }
}

module.exports = requestHandler;