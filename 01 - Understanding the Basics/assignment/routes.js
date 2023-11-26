const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log('url is ', url, method);
  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
    </head>
    <body>
        Greetings
        <form action="/create-user" method="post">
          <input type= 'text' name='userName'/>
          <button type='submit'>Submit</button>
        </form>
    </body>
    </html>
    `)
    res.end();
  } else if (url === '/users') {
    res.setHeader('Content-type', 'text/html');

    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul>
          <li>Steve</li>
          <li>Jose</li>
          <li>Patrick</li>
        </ul>
    </body>
    </html>
    `)
    res.end();
  } else if (url === '/create-user' && req.method === 'POST') {
    const content = [];
    req.on('data', (chunk) => {
      content.push(chunk);
    });
    req.on('end', () => {
      const parsedData = Buffer.concat(content).toString();
      console.log(parsedData);
      res.statusCode = 302;
      res.setHeader('location', '/');
      res.end();
    })

  }
}

module.exports = routeHandler;