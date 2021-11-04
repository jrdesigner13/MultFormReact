import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

export const FormStep4 = () => {
  const { state, dispatch } = useForm();
  return (
    <Theme>
    <C.Container>
        <h1>Registration completed</h1>
        <p></p>
        <h1>{state.name}</h1>
        <h2>{state.level === 1 ? 'Experienced developer' : 'Beginning developer'}</h2>
        <h2>{state.email}</h2>
        <h2>{state.github}</h2>
    </C.Container>
    </Theme>
  );
}