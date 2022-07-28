# NLU Lookup

A helpful app to quickly reference product NLUs

## To Do
- [x] Basic functionality
- [ ] Get NLU data from an API instead of static JSON
- [x] ~~Quick clear button changes focus back to searchbar~~ Unnecessary, the search property on the input element already provides this functionality
- [ ] Deploy to [Heroku](https://vitejs.dev/guide/static-deploy.html#heroku)
- [ ] QR code displayed in-app for quick sharing
- [ ] Re-enable strict linting and fix implicit anys

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

## Notes

I had to disable strict mode because the build would fail because I had some implicit anys and an event was not defined. So I tried to fix all the type errors and the error messages did disappear but then it made the app stop working. Well I think the app actually working si more important than strict type checking so I disabled that. If I have time and the will to do so (probably will not happen) I will go back and fix that later.