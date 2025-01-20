import './App.css'
import {FileUpload} from './components/fileUpload';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/upload' element=<FileUpload />/>
      </Routes>
    </Router>
  )
}

export default App
