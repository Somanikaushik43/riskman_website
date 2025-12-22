import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/home/Home'
import ServicesList from './pages/services/ServicesList'
import IndustriesList from './pages/industries/IndustriesList'
import IndustriesTemplate from './templates/IndustriesTemplate'
import ServiceTemplate from './templates/ServiceTemplate'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Careers from './pages/about/Careers'
import Footer from './components/layout/Footer'
import BlogList from './pages/blogs/BlogList'
import BlogTemplate from './templates/BlogTemplate'
import PrivacyPolicy from './pages/resources/Privacy'
import Terms from './pages/resources/Terms'
import BlogSingle from './pages/blogs/BlogSingle'
import './App.css'
import { Toaster } from 'react-hot-toast'
import SmoothScroll from './components/common/SmoothScroll'

function App() {

  return (
    <Router>
      <SmoothScroll/>
      <Header/>
      <main className="pt-20">
        <Routes>
          {/* HOME ROUTE */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:id" element={<ServiceTemplate />} />
          <Route path="/industries" element={<IndustriesList />} />
          <Route path="/industries/:id" element={<IndustriesTemplate />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/about/careers" element={<Careers/>} />
          <Route path="/blog" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms/>} />
          </Routes>
      </main>
      <Footer/>

    </Router>
  )
}

export default App
