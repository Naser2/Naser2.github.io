import React from 'react';
import { Link } from 'react-router';
//import React and React-router

//Passing the 'to' of link attribute as props and using the 'spread operator '...props to pass the all props of active class anywhere Navlink is used  it will clone all props and assing them to links
const NavLink = props => (
<Link {...props} activeClassName="active"/>

);
// const NavLink = props => (
//   <Link {...props} activeClassName="active" />
// );

export default NavLink;
