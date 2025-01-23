import {FileUpload} from './components/fileUpload';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Dashboard} from './pages/dashboard';
import {Auth} from './pages/auth';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/upload' element=<FileUpload />/>
        <Route path='/dashboard' element=<Dashboard />/>
        <Route path='/' element=<Auth />/>
      </Routes>
    </Router>
  )
}

export default App
