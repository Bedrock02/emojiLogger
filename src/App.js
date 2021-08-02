import './App.css';
import { FormProvider } from './contexts/formContext'
import { EventProvider } from './contexts/eventContext'
import Logger from './pages/logger'

function App() {
  return (
    <div className="App">
      <FormProvider >
        <EventProvider>
          <Logger />
        </EventProvider>
      </FormProvider>
    </div>
  );
}

export default App;
