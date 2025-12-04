import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar, Welcome } from './components/index.ts';

const App = () => {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Welcome />
      </main>
    </LanguageProvider>
  );
};

export default App;
