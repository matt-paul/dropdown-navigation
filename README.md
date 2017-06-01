### Notes on the exercise

I have created two main components, Nav and DropdownMenu.  I have deliberately tried to make the DropdownMenu component as generic as possible at this point, so as to maximise reusability, it receiving it's meny data via props.

If the menu became more complex I would consider breaking a menu item out into it's own component, but at this this stage i don't think it is necessary, and would add unnecessary complexity.

I have chosen to use styled-components for css, as it works very well with the compoent based architecture of a React app, and increases the speed and maintainability of working with a component.  In a bigger project, it also allows for less namespacing, and generally keeping class names simpler and more easily understandable.

One point that I would find interesting to discuss, is the blue outline to mark the dropdown menu as focussed for accessabilty, ie with tab.  I have kept the outline, however have styled it with dropshadow as in the breif, so by commenting out the 'opacity' and 'visibility' properties on lines 27 and 28 of DropdownMenu.js, you can see the dropshadow.

I used create-react-app to initially bootstrap the project, as it offers a quick way of setting up a modern react environment with babel and webpack.


### To run the project

npm install

npm start


### Further work

If i had more than two hours, I would fine tune the styling of the component, as perhaps the disadvantage of my approach was that I brought react into it, which adds time.  If it was on a site that I knew to be static, and the menu component was not going to be reused, I would not bring react into it.  
I would also add proptype validation to my components
