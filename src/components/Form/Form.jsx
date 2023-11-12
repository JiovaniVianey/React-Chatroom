// Form.js
import { Send } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, changeInputMessage } from '../../actions/chatActions';
import './Form.scss';

const Form = () => {
  const value = useSelector((state) => state.inputMessage);

  const dispatch = useDispatch();

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addMessage());
      }}
    >
      <input
        className="form-input"
        type="text"
        value={value}
        onChange={(event) => {
          const action = changeInputMessage(event.target.value);
          dispatch(action);
        }}
        placeholder="Saisissez votre message..."
      />
      <button type="submit" className="form-submit">
        <Send size={40} />
      </button>
    </form>
  );
};

export default Form;
