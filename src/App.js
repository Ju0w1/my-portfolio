import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from './Header/Navbar';
import Toggle from './Header/ToggleTheme/Toggle';
import Home from './Pages/Home';


function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
