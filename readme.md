# NLU Lookup

A helpful app to quickly reference product NLUs.

## To Do
- [x] Basic functionality
- [ ] Get NLU data from an API instead of static JSON
- [x] ~~Quick clear button changes focus back to searchbar~~ Unnecessary, the search property on the input element already provides this functionality
- [ ] Deploy to [Heroku](https://vitejs.dev/guide/static-deploy.html#heroku)
- [ ] QR code displayed in-app for quick sharing

## Quick Reference

My first React app.

I have no idea what I am doing.

https://javascript.plainenglish.io/fetching-data-with-useeffect-in-react-604ed53edffe

*Why can't I pass my state/handlers as props to sub components?*  
https://javascript.tutorialink.com/react-hooks-passing-state-prop-is-not-a-function/  
Answer: Because all props are passed as the **first** argument to the component. I was doing `const Searchbar = (searchString, setSearchString) =>` instead of `const Searchbar = ({searchString, setSearchString}) =>`  
Just wrap the props in brackets to pass them as a single property.

https://devtrium.com/posts/dependency-arrays  
>The dependency array basically tells the hook to "only trigger when the dependency array changes".