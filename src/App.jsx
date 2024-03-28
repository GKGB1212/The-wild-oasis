import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Button variation="danger">Click</Button>
      <Input />
      Hello world
    </div>
  );
}

export default App;
