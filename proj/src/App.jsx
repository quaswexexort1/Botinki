import './App.scss'
import Content from './allshit/Content/Content.jsx'
import Footer from './allshit/saddsadasdasd/Footer.jsx'
import Header from './allshit/saddsadasdasd/Header.jsx'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SingleCard from './allshit/saddsadasdasd/SingleCard.jsx';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
              <Header/>
              <Content/>
              <Footer/>
          </>
        }/>
        <Route path=':id' element={
          <>
              <Header/>
              <SingleCard/>
              <Footer/>
          </>
        }/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
