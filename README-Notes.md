# REACT BASIC INFO

- DOM (the Document Object Model)- it is a programming interface for HTML and XML documents
- DOM represents web page to allow programm amend, change document structure, style and content.
- DOM represents document as nodes and objects. Therefore different programming languages can connect to this web page.
- The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
- The DOM has a tree structure, tree starts from root node which is document.documentElement or HTML teg and then it branches out.

- DOM relatively slow in refreshing due to tree structure, which is needed recursion.
- React gives opportunity to developers to work with virtual DOM.
- Virtual DOM which is used by React is refreshing much quicker and effective, because he doesn't use recursion to go through all nodes and branches( manually traversing through the parent and child nodes), but it uses Virtual DOM to compare with previous version and updates only those nodes that have been changed.

- React allow us to use syntax mix of JavaScript and HTML which is called JSX (JavaScript extension), JavaScript can be implemented using curly brackets --> {}
- We can insert many JavaScript data types into React - string, number, array but not an objects and it will throw an Error

- Components allow to separate our app on independant and reusable blocks of code. All components names must begin with capital letter to separate them from HTML tags (because they use the same syntax when theya are rendering)
- Also, components create parent-child relationship and show child components -->
  App

  - Header
  - Nav
  - Content //<--parent has 2 child
    - Welcome Page //<--first child of Content
    - Sidebar //<--second child of Content

- onClick = {function} //<-- function that will be invoked after click
- onMouseEnter = {mouseOver function} //<-- function will be invoked after hover on that field

# Basic React file structure

- public (FOLDER)

  - favicon.ico
  - index.html ////<--MAIN, ROOT FILE, STARTING FILE

- src (FOLDER)

  - App.css //<--css file,styles
  - App.js //<-- where you start your DOM tree, first component, all others components are child components
  - index..css
  - index.js //<-- connect App.js to render + root, here we can make visualisation of React element inside DOM's root node
  - components //<-- folder, where you keep all components for your website

.....................................................................................................

# Creating new REACT apps

```JS
//in terminal we put
// my-app-name <-- any name of our app, must be only in small letters

npx create-react-app my-app-name
```

- this command will install Reat app with all default recomended settings, will install required dependencies, create new git repo and initial commit if one doesn't exist. Also, we need to delete all unnecessary files and code.

- Before you start creating your app you need to think about app design and component location
  Tools: - Excalidraw - Figma - Miro

# Different types of writing React components

## React components can be either function or class.

[Components](https://react.dev/reference/react/Component)

1. Function example

```JS
import Header from "./components/Header";  //<--importing other component in here, to use it in this component


const App =()=>{

    const [todos, setTodos] = useState(["eat", "sleep", "react"]);
    //some other code related to this component

    return(
        //<--all return code must be in one <div> tag or using <> </> blocks
        <div>
            const listItems = ["One", "Two", "Three", "Four"];

            <h1>Hello World</h1>
            <ul>
                {listItems.map((item)=>( //<--inserting JavaScrit to HTML using curly brackets
                    //<--always use key={...} with <li> tags, keys must be unique and key must be assign to each ellement in the array, keys help React identify which items have changed, are added or are removed. Most often you would use your data as keys. Index can't be used in the keys due it is changing when you adding or removing items in the array.

                        to help React app identify each item in the list when we loop --> listItems.map((item)=>{...})
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;  // <-- export this component, always write this in the bottom of the file component,
//then we can import App from "./App.jsx" in other component, write this on the top of the file component
```

2. Class example

```JS
import { Component } from 'react';

// class App extends React.Component { <--the same, if we don't import import { Component } from 'react';
class App extends Component {

 state = {
    age: 42,
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1
    });
  };
 //some code here

  render() {
    return (
        <div>
            <h2>Hello World , {this,props.name}</h2>
            <button onClick={this.handleAgeChange}>
            Increment age
            </button>
            <p>You are {this.state.age}.</p>
        </div>
            );
  }
}
```

# Props (shorten name from properties)

- Often we need to pass data between/ through components
- Props are key-value pairs
- We can pass any data from parent component to the it's child component but backwards we can't do it(from child to parent we can't pass any data)

```JS
const App = ()=>{  //<--parent App component
    return (
        <div>
            <Sum num1={2} num2={3} />  ///<-- passing props to App child component
        </div>
    );
};
export default App;



const Sum =(props)=>{
    console.log(props); //<--{num1:2,num2:3}

    return(
        <p>
            {props.num1} + {props.num2} = {props.num1 + props.num2}  //<--use curly bracket for JavaScript in React
        </p>
    );
};
export default Sum;
```

# Hooks

- All hooks starts with word --> use
- Our function should be named with the value of state they update --> setname, setCount etc. if we create state for name then we need to call it --> const [name,setName] = useState("")

- Only call Hooks at the top level (declare all Hooks on the top)
- Only call Hooks from React function (Hook must be inside the function of the React component )

# React State --> useState

- To make our apps dynamic they must keep track of some information that cnahges. This concept reffered to as state.
- We use state to track any data that changes i our app
- React gives us the useState hook, which allow us to change state variable and then React will update our UI amd then render HTML --> new data will appear on our UI (new data will show on webpage)
- A goog rule of thumb to follow --> place your state as low as possible, but as high as necessary. (you need to plan in what component you need to have which state, state must be located in correct component in the tree to pass all necessary data to lower components and not to high in the tree to do not make props drilling - by passing props through all the components down to correct component)

```JS
import {useState} from 'react';  //<-- import useState from Reacr library to this component to use it in here

const App =()=>{
    // useState('Paul'); <-- useState takes 1 argument- initial value for the state
    // [Name, setName] <-- 2 elements
    // name <-- the current state value, Name = 'Paul'
    // setName <-- a function to update the state value, we can change the Name ="Paul" only using this function
    const [name, setName] = useState('Paul');
    console.log(Name); //<--Paul

    return(
        <div>
            <h3>Hello {Name}</h3>

            <button onClick={()=>setName('Izzi')}> Say Hi to Izzi </button>  //<--by clicking on the button we change the Name="Paul" to Name = "izzi" using setName function
            //later we will use (event)=>{setName(event.target.value)}
        </div>
    );
};

export default App;
```

- Somethimes new state value will be dependant on the current value. As easy example --> when we create counter

```JS
import {useState} from 'react';  //<-- import useState from Reacr library to this component to use it in here

const App =()=>{
    const [count, setCount] = useState(0);  //<--count = 0 , from begging

return{
    <div>
        <h1>Count: {count}</h1>  //<-- Count: 0, zero is dynamic number

        <button onClick={()=>setCount((currCount)=>{  //<-- currCount === count , In here
            return currCount +1;
            }) }> Button +1 </button>  //<-- when we press this btn -> counter +1
    </div>
};
};
```

- Never mutate the State, always when you want to change the state you must do it using setState function
- From example above, we can change count state only using setCount function. We can't mutate the count and write count = 1. USE setCount!!!

Another Exanple 1

```JS
const [todos,setTodos] = useState(["clean", "wash", "cook"]);
const [task,setTask] = useState("");

function createTodo(){
    setTodos(oldTodos=>{   //<--oldTodos === todos
        return [...oldTodos,task]
    });
}
```

Example 2

```JS
import {useState} from "react";

const App=()=>{
const [count, setCount] = useState(0);

const incrementCount=(increment)=>{  //<-- parametr will be passed with the function,
    setCount((currCount)=>{
        return currCount + increment;
    });
};

return(
    <div>
        <h1>Count; {count}</h1>
        <button onClick={()=>incrementCount(1)}> +1 Button </button>  //<--Invoke incrementCount by clicking the button
        <button onClick={()=>incrementCount(-1)}> -1 Button </button>
    </div>
);
};
```

Example 3

```JS
import {useState} from "react";

const App=()=>{
const [todos, setTodos] = useState(["day1","day2","day3"]);

const addTodo = ()={
    setTodos((currTodos)=>{
        return [...currTodos, `day ${currTodos.length}`];  //<--adding new days to our array
    })
};

return(
    <div>
        <button onClick={()=>addTodo()}> Add Todo </button>

        <ul>
            {todos.map((todo)=>{
                return <li key={todo}>{todo} </li>
            })}
        </ul>
    </div>
);


};
```

- We CAN'T Do THIS -->

```JS
setTodos((currTodos)=>{
    currTodos.push('day ${currTodos.length}') //<--WE can't use push
    return currTodos;
    })
```

# Passing state to child components (passing state using props)

- We can pass any data from parent component to the child component through - props

```JS
import {useState} from "react";

const App=()=>{
const [todos, setTodos] = useState(["code1","code2","code3"]);

const clearTodos =()=>{
    setTods([]);
};

return(
    <div>
        <Header />
        <button onClick={()=>clearTodos()} > Clear All Todos </button>

        <TodoList todos ={todos} />  //<--passing todos ={todos} to TodoList child component as props

    </div>
)
};


//Header Component
const Header= ()=>{
return <h1> My todo List </h1>
};


//TodoList Component
const TodoList =(props)=>{  //<-- we receive the props here todos, that we passed
    return(
        <ul>
            {props.todos.map((todo)=>{
                return <li key={todo}> {todo} </li>
            })}
        </ul>
    );
};
```
