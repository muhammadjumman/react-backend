require('@babel/register')({
    presets: ['@babel/preset-react'],
    
});

const App = require('../../client/home/app.jsx')
const React = require('react');
const fs = require('fs')
const path = require('path')
const ReactDomServer = require('react-dom/server')

exports.index = function(req, res){
    const Apphtml = ReactDomServer.renderToString(
        React.createElement(App, {title :'Home of the body', body: 534524})
      );
    const html = `
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <script defer src="/home.bundle.js"></script>
            <script defer src="/745.bundle.js"></script>
        </head>
        <body>
            <div id="root">
            
            </div>
        </body>
        </html>
    `
    fs.writeFileSync(path.resolve(process.cwd(), 'output.html'), html)
   res.send(html)
   
}