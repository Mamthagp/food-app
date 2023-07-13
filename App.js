const rootHandle = document.getElementById('root')

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
                        "div", 
                        { id: "child" },
                        [
                            React.createElement("h1", {}, "I am a h1 tag"),
                            React.createElement("h2", {}, "I am a h2 tag")
                        ]
                    ),
        React.createElement(
                        "div",
                        { id: 'child2'},
                        [
                            React.createElement("h1", {}, "I'm a h1 tag"),
                            React.createElement("h2", {}, "I'm a h2 tag ")
                        ]
        )
    ]
)

// const h1Handle = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello React!"
// )

const root = ReactDOM.createRoot(rootHandle)
root.render(parent)