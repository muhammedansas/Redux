import './App.css';
import { Provider } from 'react-redux';
import store from './Store';

import { Route, Routes } from 'react-router-dom';
import Todo from './Todo/Todo';

function App() {
  return (
    <div className="App">
    <Provider store={store}>

      <Routes>
    
     
      
      <Route path='/' element={ <Todo/>} />
    
    
    </Routes>
    
    </Provider>
    </div>
  );
}

export default App;
