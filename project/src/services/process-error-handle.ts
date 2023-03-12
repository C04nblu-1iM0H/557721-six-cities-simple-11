import {store} from '../store/index';
import {setErrorAction} from '../store/actions';
import {clearErrorAction} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setErrorAction(message));
  store.dispatch(clearErrorAction());
};
