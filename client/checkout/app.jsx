const React = require('react')

module.exports = function App({title, body, data}){
    return(
        <>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <link rel="stylesheet" href="/style.css" />

        </head>
        <body>
            
            {body}
            <br />
            <br />
            {data}
        </body>
        </html>
        </>
    )
}