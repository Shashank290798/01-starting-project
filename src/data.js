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