import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent} from 'react-router/node_modules/@types/react';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const handleFinishStep = () => {
    if(state.email !== '' && state.github !== '') {
      history.push('/step4');
      console.log(state);
    } else {
      alert("Fill in the fields.")
    }
    
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 3/3 </p>
        <h1>That's cool {state.name}, How can we contact you?</h1>
        <p>Fill in the contact information so that we can contact you in the future.</p>

        <hr/>

        <label>
          Your email
          <input
            type="email" 
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Your GitHub
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link className="backButton" to="/step2">Back</Link>
        <button onClick={handleFinishStep}>Finish Registration</button>
      </C.Container>
    </Theme>
  );
}