import {FileUpload} from './components/fileUpload';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Dashboard} from './pages/dashboard';
import {Auth} from './pages/auth';
import {Landing} from './pages/landingpage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/upload' element=<FileUpload />/>
        <Route path='/dashboard' element=<Dashboard />/>
        <Route path='/auth' element=<Auth />/>
        <Route path='/' element=<Landing />/>
      </Routes>
    </Router>
  )
}

export default App
