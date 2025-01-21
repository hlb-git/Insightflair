import {FileUpload} from './components/fileUpload';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {AgustoCharts} from './components/charts';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/upload' element=<FileUpload />/>
        <Route path='/dashboard' element=<AgustoCharts />/>
      </Routes>
    </Router>
  )
}

export default App
