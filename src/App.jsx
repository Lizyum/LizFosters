import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Fosters from './Pages/Fosters'
import Alicia from './Pages/Alicia'
import Niven from './Pages/Niven'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/fosters" element={<Fosters />}/>
          <Route path="/alicia" element={<Alicia />}/>
          <Route path="/niven" element={<Niven />}/>

        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App
