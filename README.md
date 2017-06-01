This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Notes on the exercise

I have created two main components, Nav and DropdownMenu.  I have deliberately tried to make the DropdownMenu component as generic as possible at this point, so as to maximise reusability, it receiving it's meny data via props.

If the menu became more complex I would consider breaking a menu item out into it's own component, but at this this stage i don't think it is necessary, and would add unnecessary complexity.

I have chosen to use styled-components for css, as it works very well with the compoent based architecture of a React app, and increases the speed and maintainability of working with a component.  In a bigger project, it also allows for less namespacing, and generally keeping class names simpler and more easily understandable.
