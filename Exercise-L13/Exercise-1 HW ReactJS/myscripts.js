//create componet
class Hello extends React.Component {
    //render function
    render (){
        //return JSX
        return <h1>Hello World Using ReactJS !!!</h1>
    }
}

//reatc dom call function render
ReactDOM.render(<Hello/>, document.getElementById("app"));