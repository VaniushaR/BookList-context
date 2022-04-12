import {NavBar} from './components/NavBar'
import {BookList} from './components/BookList'
import { ThemeContextProvider } from './context/ThemeContext'
import './App.css'
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
