function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  let name1 = "Bharathiraja";
  return (
    <div>
      <Hello name={name1} />
      <p>Hello World!</p>
    </div>
  );
}

export default App;
