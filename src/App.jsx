import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WhoWeAre from './pages/WhoWeAre'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="who-we-are" element={<WhoWeAre />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App
