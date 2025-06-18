import React from 'react';
import './App.css';
import Works from './components/collab';
import Blog from './blog';
import Footer from './components/footer';
import Home from './home';
import FullBlogPostDetails from './components/blogPostDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './services';
import WorkFullDetails from './workFullDetails';
import ContactForm from './contact';

function App() {
  return (
<>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<FullBlogPostDetails />} />
        <Route path="/works" element={<Works/>} />
        <Route path="/works/:id" element={<WorkFullDetails />} />
        <Route path='/Service' element={<Services/>}/>
        <Route path='/contact' element={<ContactForm/>}/>

      </Routes>
  </>
  );
}

export default App;
