import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import Messages from '../Messages/Messages';
import Settings from '../Settings/Settings';
import './App.scss';

function App() {
  const isAuthenticated = useSelector((state) => state.nickname !== '');
  return (
    <div className="App">
      <Messages />
      {isAuthenticated && <Form />}
      <Settings />
    </div>
  );
}

export default App;
