# React Backend
- First of all this does not work  

yeah you will get a html with ReactDomServer.rendertostring() but it does not matter  
why?  
Suppose you used the hydrateRoot and used webpack to bundle them  
now you add these bundle to the script tag in the html   
now what do you think gonna happen

you might think you have the html, now you only need the js, if you input the js you get the interactivity of the webpage  

yes you get the interactivity  

then whats the problem?

you see the hydrateRoot is going to rewrite the full page, you are going to write this full page like you with createRoot, the initial html from the backend does not matter any more

and you probably also need to bundle the backend, rendertostring method does not work if you import any module, not only that you now have to use `require` instead of `import` why? because node does not support import, or probably my version does not

and the dev server does not work as expected, this only serve file from the public and you need to have this index.html file for that, it won't going to work like what i am trying, building the full html file from the react.

                                           **End**