import './App.css'
import { Header } from './header/Header'
import { Intro } from './intro/intro';
import { Skills } from './skills/Skills';
import {Projects} from './projects/Projects'
import { Contact } from './contact/contact';


function App() {

  return (
    <>
    <Header/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
