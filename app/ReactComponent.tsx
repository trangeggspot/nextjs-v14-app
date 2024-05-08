import SimpleGreeter from '../src/react-component/simple-greeter';

export default function ReactComponent() {
  return (
    <div style={{ padding: "20px", margin: "20px", border: "4px solid red" }}>
      <h1>React Component</h1>
      <SimpleGreeter name="I'm rendering from React Component" />
    </div>
  )
}