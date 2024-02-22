import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import BecomeAcaregiver from './pages/becomeAcaregiver'
import Service from './pages/services'
import Navbar from './components/navbar/navbar'


function App() {
    return (
        <div>
            <Navbar />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='BecomeAcaregiver' element={<BecomeAcaregiver />} />
                <Route path='Service' element={<Service />} />
                <Route path='AboutUs' element={<AboutUs />} />

            </Routes>
        </div>
    )
}

export default App
