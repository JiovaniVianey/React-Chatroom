import Form from '../Form/Form';
import Messages from '../Messages/Messages';
import Settings from '../Settings/Settings';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
}

export default App;
