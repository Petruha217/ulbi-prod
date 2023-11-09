import { Suspense } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './styles/index.scss';
import MainPageAsync from './pages/MainPage/MainPageAsync';
import AboutPageAsync from './pages/AboutPage/AboutPageAsync';
import useTheme from './Theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {
  const {theme, toggleTheme } = useTheme(); 
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<h3>Loding...</h3>}>
        <Routes>
        <Route path='/' element={<MainPageAsync />} />
        <Route path='/about' element={<AboutPageAsync /> } />
      </Routes>
      </Suspense>
      
      
    </div>
  )
}
export default App;