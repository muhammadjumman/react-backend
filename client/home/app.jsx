const React = require('react')



module.exports = function App({title, body}){

    const [state, setState] = React.useState(0)
    const [data, setDate] = React.useState(null)

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=> res.json())
            .then((json)=> setDate(json))
    },[])

    return(
        <>
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <script src="/home.bundle.js"></script>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div id="root">
            This is the home file and it changes
            {body}
            <button onClick={()=>setState(prev => prev+1)}>+</button>
            {state}
            <button onClick={()=>setState(prev => prev-1)}>-</button>
            </div>
            <div className="">
                {data && data.map((d)=>(
                    <>
                    <h3 key={d.id}>{d.title}</h3>
                    <p key={d.id}>{d.body}</p>
                    </>
                ))}
            </div>
        </body>
        </html>
        </>
    )
}