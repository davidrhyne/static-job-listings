# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![desktop](https://user-images.githubusercontent.com/63062052/120491010-82a3ca80-c37e-11eb-8b60-b683b09e6dcf.png)
![mobile](https://user-images.githubusercontent.com/63062052/120488263-3bb4d580-c37c-11eb-8702-999db3db848c.png)

### Links

- Solution URL: [@github](https://github.com/davidrhyne/static-job-listings)
- Live Site URL: [@github pages](https://your-live-site-url.com)

## My process

After reading the style guide and creating the React app, I spent the majority of the time making sure all the functional elements worked before starting any styling.  For this project, at least 80% of the logic is driven by the maintenance of the 'filters' used to select the jobs to display.  After that, I started styling the components which lead to a couple iterations of code revisions to add omissions and fix bugs.  And once I thought the code was working as intended, I spent some time refactoring the code, removing console logs, and adding comments.

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styling React Components
- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This was my first solo React with styled-components and I learned an incredible amount about both of those packages.  From React, it was great to code an application that used hooks and functional components.  And from styled components, the exercise of converting html tags to named components was fun and challenging.

### Continued development

This was a great exercise in React and styled-components and I will continue to focus on projects like to keep get more experience in both of these... along with flexbox, JavaScript, and CSS.  In particular, I will focus on techniques like ...restProps and children to limit the number of props passed between components.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - An invaluable resource that I use daily.
- [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is a great resource on flexbox!  
- [React Constants](https://www.joshwcomeau.com/css/css-variables-for-react-devs/) - This article helped to remind me to use a 'constants' file and folder for code like CSS variables.
- [styled-component documentation](https://styled-components.com/) - This was my first solo adventure with styled-components and their documentation was very helpful.
- [stack-overflow](https://stackoverflow.com/questions/31000885/align-an-element-to-bottom-with-flexbox) - The recommendation to use 'flex-grow: 1;' was exactly what I needed to position the last flexbox element to the right side of the container.
- [stack-overflow](https://stackoverflow.com/questions/34582405/react-wont-load-local-images) - The recommendation to "Keep all your images(or any assets like videos, fonts) in the public folder as shown below." solved my problem with loading images dynamically with React.

## Author

- Frontend Mentor - [@davidrhyne](https://www.frontendmentor.io/profile/davidrhyne)
- Twitter - [@DavidRhyne16](https://www.twitter.com/DavidRhyne16)
