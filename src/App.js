import { useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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

  const loading = () => (
    <p>Loading...</p>
  )

  const renderBody = () => (
    <div className='vision_content'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {routes.map((ele) => (
            <Route key={ele.path} path={ele.path} element={<ele.component />} />
          ))}
        </Routes>
      </HashRouter>
    </div>
  )

  return (
    <div className="App">
      <Header />
      <Suspense fallback={loading()}>
        {renderBody()}
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;