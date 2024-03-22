import componentsImage from "./assets/components.png";
import config from "./assets/config.png"
import jsx from "./assets/jsx-ui.png"
import state from "./assets/state-mgmt.png"

export const CORE_CONCEPTS = [
    {
        title: "Components",
        description: "The core UI building block - compose the user interface by combining multiple components",
        img: componentsImage
    },
    {
        title: "JSX",
        description: "Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered.",
        img: jsx
    },
    {
        title: "Props",
        description: "Make components configurable (and therefore reusable) by passing input data to them.",
        img: config
    },
    {
        title: "State",
        description: "React-managed data which, when changed causes the component to re-render & the UI to update.",
        img: state
    }
]
export const EXAMPLES = {
    components: {
        title: "Components",
        description: "The core UI building block - compose the user interface by combining multiple components",
        code: `function Button(props) {
    return <button>{props.label}</button>;
}

function App() {
    return (
        <div>
            <Button label="Click me" />
        </div>
    );
}`
    },
    jsx: {
        title: "JSX",
        description: "Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered.",
        code: `function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    const name = "Alice";
    return (
        <div>
            <Greeting name={name} />
        </div>
    );
}`
    },
    props: {
        title: "Props",
        description: "Make components configurable (and therefore reusable) by passing input data to them.",
        code: `function Welcome(props) {
    return <h1>{props.message}</h1>;
}

function App() {
    return (
        <div>
            <Welcome message="Welcome to my website!" />
        </div>
    );
}`
    },
    state: {
        title: "State",
        description: "React-managed data which, when changed causes the component to re-render & the UI to update.",
        code: `import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}`
    }
}