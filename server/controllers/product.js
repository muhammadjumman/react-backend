require('@babel/register')({
    presets: ['@babel/preset-react'],
    
});

const App = require('../../client/product/app.jsx')
const React = require('react');
const ReactDomServer = require('react-dom/server')

exports.index = function(req, res){
    const html = ReactDomServer.renderToString(
        React.createElement(App, {title :'Product', body: 'This is the product page'})
      );
   res.send(html)
}