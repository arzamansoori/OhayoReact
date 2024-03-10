import React from "react"
import ReactDOM from "react-dom/client"

//COMPONENT COMPOSITION
const Title = () => (
  <h1 className="heading">Namaste React Title</h1>  
);

const HeadingCompTitle = () => (
    <div>
    <Title />
    <h1>Hello from heading component</h1>
    </div>
);

const headRoot = ReactDOM.createRoot(document.getElementById("heading"));

headRoot.render(<HeadingCompTitle />);


// using html code
/* <div>
    <div>
        <h1>
            "I am an h1 tag"
        </h1>
    </div>
</div> */

//using react
// const parent = React.createElement('div', {id : "parent"}, 
//                React.createElement("div", {id: "cild"}, 
//                [React.createElement("h3", {}, "I am an h3 tag"),
//                React.createElement("h4", {}, "I am an h4 tag")]));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//console.log(parent);

/* <div>
    <div id=child1>
        <h1>
            "I am an h1 tag"
        </h1>
    </div>
    <div id=child2>
        <h1>
            "I am an h1 tag"
        </h1>
    </div>
</div> */

const parent = React.createElement('div', {id : "parent"}, 
               [React.createElement("div", {id: "cild1"}, 
               [React.createElement("h3", {}, "I am learning react 🚀"),
               React.createElement("h4", {}, "I am an h4 tag")]),
               React.createElement("div", {id: "cild2"}, 
               [React.createElement("h3", {}, "I am an h3 tag"),
               React.createElement("h4", {}, "I am an h4 tag")])]);

//const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);

// //JSX: Html like syntax but not html
// //JSX => react.createElement => ReactElement-JS Object => HTML Element
const jsxHeading = <h1 className="hello" id="heading"> Hello from the JSX world</h1>
console.log(jsxHeading)

const rootJSX = ReactDOM.createRoot(document.getElementById("root"));
rootJSX.render(jsxHeading);

// //root.render(parent);





// const createEle = React.createElement("h4", {id: "heading"}, "Hello world from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(createEle);
