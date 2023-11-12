// Settings.js
import { X } from 'react-feather';
import { useState } from 'react';
import './Settings.scss';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`settings-container ${isOpen ? 'open' : ''}`}>
      <button type="button" className="toggle-button" onClick={toggleSettings}>
        <X size={18} />
      </button>
      <div className="settings-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
