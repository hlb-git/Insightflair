import {FileUpload} from './components/fileUpload';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Dashboard} from './pages/dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/upload' element=<FileUpload />/>
        <Route path='/dashboard' element=<Dashboard />/>
      </Routes>
    </Router>
  )
}

export default App
