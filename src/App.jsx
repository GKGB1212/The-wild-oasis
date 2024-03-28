import { styled } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

const Button = styled.button`
  background-color: var(--color-brand-600);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin: 3rem;
  padding: 1rem;
  &:hover {
    background-color: var(--color-brand-700);
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Button>Click</Button>
      Hello world
    </div>
  );
}

export default App;
