window.onload   =   ()  =>  {
    const   rootElement =   document.getElementById("root")
    const   root    =   ReactDOM.createRoot(rootElement) 

    const ints  =   [1, 2, 3]
    const   anotherArray    =   []

    anotherArray.push(React.createElement("li", {key:ints[0]}, ints[0]))

    root.render(anotherArray)
}
