import fantasy from "./books/fantasy.json"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

import Header from './components/Header';
import BookList from './components/BookList';



function App() {
  return (
    <div>
      
      <Header className= "mb-5"/>
      <BookList arr={fantasy}/>
      
   </div>
  );
}

export default App;
