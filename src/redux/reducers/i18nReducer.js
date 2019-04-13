import { REQUEST_LANG, SUCCESS_LANG } from 'actions/actionTypes';

const initialState = {
  wordings: {
    loading: 'loading',
  },
};

const i18n = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LANG:
      return {
        ...state,
        wordings: {},
      };
    case SUCCESS_LANG:
      return {
        ...state,
        wordings: {
          loading: 'yeahh',
        },
      };
    default:
      return state;
  }
};

export default i18n;
