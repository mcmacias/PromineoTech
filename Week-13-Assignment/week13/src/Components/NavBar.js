//becuase I have empty links I will use:

import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavBar">
        <ul className="List">
          <li><a href="#">Sign In Page</a></li>
          <li><a href="#">Home Page</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    );
  }
}


// when have links
// import React from "react";
// // import { Link } from "react-router-dom";
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// would also need to import all pages that are being linked to 

// export default class NavBar extends React.Component{
//     render () {
//         return (
//             <BrowserRouter>
//                 <nav className="NavBar">
//                     <ul className="List">
//                     <li><Link to="/signin">Sign In Page</Link></li>
//                     <li><Link to="/">Home Page</Link></li>
//                     <li><Link to="/about">About Us</Link></li>
//                     <li><Link to="/contact">Contact Us</Link></li>
//                     </ul>
//                 </nav>

//                 <Switch>
//                     <Route path="/" exact component={HomePage} />
//                     <Route path="/about" component={AboutPage} />
//                     <Route path="/contact" component={ContactPage} />
//                     <Route path="/signin" component={SignInPage} />
//                 </Switch>
//             </BrowserRouter>
//         );
//     };
// }