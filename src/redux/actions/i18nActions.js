import { SUCCESS_LANG } from './actionTypes';

const testPro = () =>
  new Promise(res => {
    setTimeout(() => {
      res('OKayyyye');
    }, 1000);
  });

// eslint-disable-next-line
export const requestLang = text => async dispatch => {
  await testPro();
  dispatch({ type: SUCCESS_LANG, payload: { test: 'test' } });
};
