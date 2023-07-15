const React = require('react')

// const fs = require('fs')
// const path = require('path')

module.exports = function App({title, body}){
    // const file = fs.readFileSync(path.join(process.cwd(), 'package.json'),{encoding: 'utf8'})
    
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
            <pre>

            {/* {file} */}
            </pre>
            <data />
        </body>
        </html>
        </>
    )
}

