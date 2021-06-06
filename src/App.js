import './App.css';
import Navbar from './Components/Navbar/navbar'
import Banner from './Components/Banner/banner'
import AboutCompany from './Components/AboutCompany/aboutcompany'
import Subtitle from './Components/Subtitle/subtitle'
import TodoList from './Components/ToDoList/todolist'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutCompany />
      <TodoList />
      <Subtitle />
    </div>
  );
}

export default App;
