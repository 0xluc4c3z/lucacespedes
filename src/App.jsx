import './App.css'
import { Aspirations } from './components/Aspirations/Aspirations'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Formation } from './components/Formation/Formation'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Stack } from './components/Stack/Stack'

function App() {

  return (
    <div className="App">
      <article id='container'>
        <Home />
        <Stack />
        <Projects />
        <Formation />
        <Aspirations />
        <Contact />
      </article>
        <Footer />
    </div>
  )
}

export default App
