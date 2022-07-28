# NLU Lookup

A helpful app to quickly reference product NLUs.

## To Do
- [ ] Basic functionality
- [ ] Get NLU data from an API instead of static JSON
- [ ] Quick clear button changes focus back to searchbar
- [ ] Deploy to [Heroku](https://stackoverflow.com/questions/69444225/how-do-i-deploy-to-heroku-using-vite)
- [ ] QR code displayed in-app for quick sharing


## Quick Reference

https://javascript.plainenglish.io/fetching-data-with-useeffect-in-react-604ed53edffe

*Why can't I pass my state/handlers as props to sub components?*  
https://javascript.tutorialink.com/react-hooks-passing-state-prop-is-not-a-function/  
Answer: Because all props are passed as the **first** argument to the component. I was doing `const Searchbar = (searchString, setSearchString) =>` instead of `const Searchbar = ({searchString, setSearchString}) =>`  
Just wrap the props in brackets to pass them as a single property.

https://devtrium.com/posts/dependency-arrays  
>The dependency array basically tells the hook to "only trigger when the dependency array changes".