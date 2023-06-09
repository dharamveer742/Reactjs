/* Production ready application
Hot module replacement    :- When you make changes to your code as your development server is running, Parcel automatically updates your application in your browser without having to refresh. This is often referred to as Hot Reloading.
File Watcher algorithm
Bundling 
minifyig 
clean our code
manages dev and production build
super fast build algorithm
image optimization 
caches while development   :- caching of  build
makes app compatible with older version of browser
https on dev  
manages port number  for more than two  projects 
tree shaking :- removing unwanted code

  "main": "app.js", :- try changing the file extension of "main" in package.json.

*/

import React from "react"
import ReactDOM from "react-dom/client"
const heading1 = React.createElement("h1",{"id":"title","key":"h1"},"heading1");
const heading2 = React.createElement("h2",{"id":"title2","key":"h2"},"heading2"); // give key to child elements to avoid error
const container=React.createElement("div",{"id":"container","hello":"world"},[heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));

// component 

const H2 = ()=>{
  return (<div>
    <h1>Hello</h1>
    <h2>World</h2>
  </div>)
}


root.render(<H2/>);