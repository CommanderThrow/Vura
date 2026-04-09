import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* More sections will go here */}
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/builder" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
