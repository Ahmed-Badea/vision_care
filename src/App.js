import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.scss';

function App() {

  // handle current lang
  useEffect(() => {
    if(!localStorage.lang){
      localStorage.setItem("lang", "en");
    }
  })

  const renderBody = () => (
    <div className='vision_content'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {routes.map((ele) => (
            <Route key={ele.path} path={ele.path} element={<ele.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )

  return (
    <div className="App">
      <Header />
      {renderBody()}
      <Footer />
    </div>
  );
}

export default App;