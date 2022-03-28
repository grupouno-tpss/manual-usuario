import logo from './logo.svg';
import './assets/App.css';

//components

import NavigationManual from './components/NavigationManual';
import NavigationScroll from './components/NavigationScroll';
import ArticlesScroll from './components/ArticlesScroll';

function App() {
  return (
    <div className="App">
      <NavigationManual />
      <div className='d-flex'>
        <NavigationScroll />
      </div>
      <div className='viewArticle'>
        <ArticlesScroll />
      </div>
    </div>
  );
}

export default App;
