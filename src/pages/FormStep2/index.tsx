import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent} from 'react-router/node_modules/@types/react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  }, []);

  const handleNextStep = () => {
    if(state.name !== '') {
      history.push('/step3');
    } else {
      alert("Fill your name.");
    }
    
  }

  const setLevel = (level: number ) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3 </p>
        <h1>{state.name}, what best describes you? </h1>
        <p>Choose the option that best matches your current status as a developer.</p>

        <hr/>

        <SelectOption 
          title="I'm beginner"
          description="I started developing less than 2 years ago."
          icon="🥳"
          selected={state.level === 0}
          onClick={()=>setLevel(0)}
        />

        <SelectOption 
          title="I'm developer"
          description="I've been developing for 2 years or more"
          icon="😎"
          selected={state.level === 1}
          onClick={()=>setLevel(1)}
        />

        <Link className="backButton" to="/">Back</Link>

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
}