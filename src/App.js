import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from './Header/Navbar';
import Home from './Pages/Home';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
