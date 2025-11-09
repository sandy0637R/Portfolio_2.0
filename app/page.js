"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <>
  <Navbar/>
  <Header/>
  <About/>
  <Services/>
  <Mywork/>
  <Contact/>
  <Footer/>
  </>
  );
}
