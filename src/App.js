import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarSelection from './pages/carSelectionPage';
import { FormProvider } from './context/formContext';
import { IntlProvider } from 'react-intl';
import { CarIdProvider } from './context/carSelectedID';

function App() {
  return (
    <>
      <IntlProvider locale="tr">
        <CarIdProvider>
          <FormProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/carSelection' element={<CarSelection />} />
              </Routes>
            </BrowserRouter>
          </FormProvider>
        </CarIdProvider>
      </IntlProvider>
    </>
  );
}

export default App;
