import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from './Header/Navbar';
import Main from './Pages/index';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Main />
    </ChakraProvider>
  );
}

export default App;
