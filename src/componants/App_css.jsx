import '../App.css'

function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <div className="App">
      <h1>Hello Style!</h1>
      <h1 style={{ backgroundColor: "lightblue" }}>camelCased Property Names</h1>
      <hr />
      <h1 style={myStyle}>JavaScript Object</h1>
      <hr />
    </div>
  )
}

export default App
