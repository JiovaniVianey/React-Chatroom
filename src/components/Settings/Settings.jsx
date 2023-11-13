// Settings.js
import { X } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, changeSettingsField } from '../../actions/chatActions';
import Field from '../Field/Field';
import './Settings.scss';

const Settings = () => {
  const isOpen = useSelector((state) => state.isSettingsOpen);

  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);

  const dispatch = useDispatch();

  return (
    <div className={`settings-container ${isOpen ? '' : 'open'}`}>
      <button
        type="button"
        className="toggle-button"
        onClick={() => {
          dispatch(toggleSettings());
        }}
      >
        <X size={18} />
      </button>
      <div className="settings-form">
        <form>
          <Field
            identifier="email"
            label="Adresse e-mail"
            placeholder="Email"
            value={emailValue}
            changeField={(identifier, newValue) => {
              console.log(
                `changeField email: identifier=${identifier}, newValue=${newValue}`
              );
              const action = changeSettingsField(newValue, identifier);
              dispatch(action);
            }}
            required
          />
          <Field
            identifier="password"
            type="password"
            label="Mot de passe"
            placeholder="Mot de passe"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              console.log(
                `changeField email: identifier=${identifier}, newValue=${newValue}`
              );
              const action = changeSettingsField(newValue, identifier);
              dispatch(action);
            }}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
