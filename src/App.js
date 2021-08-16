import Navbar from './Navbar';
// import Form from './Form';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageContextProvider } from './contexts/LanguageContext';
import FormWithHooks from './FormWithHooks';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageContextProvider>
          <Navbar />
          {/* <Form /> */}
          <FormWithHooks />
        </LanguageContextProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
