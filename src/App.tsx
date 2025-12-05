import { LanguageProvider } from './contexts/LanguageContext';
import { Dock, Navbar, Welcome } from './components/index.ts';

const App = () => {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Welcome />
        <Dock />
      </main>
    </LanguageProvider>
  );
};

export default App;
