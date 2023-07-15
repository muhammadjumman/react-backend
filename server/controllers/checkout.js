require('@babel/register')({
    presets: ['@babel/preset-react'],
    
});

const App = require('../../client/checkout/app.jsx')
const React = require('react');
const ReactDomServer = require('react-dom/server')

exports.index = async function(req, res, next){

    try{
        const data = await fetch('http://localhost:3000/data')
        
        const text = await data.json()
        const html = ReactDomServer.renderToString(
            React.createElement(App, { title: 'Checkout', body: 'This is the  checkout page', data: JSON.stringify(text) })
        );
            res.send(html)
    }catch(err){
        next(err)
    }
}