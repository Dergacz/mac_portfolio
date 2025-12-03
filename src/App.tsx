import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
      </main>
    </LanguageProvider>
  )
}

export default App
