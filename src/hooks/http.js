import { useReducer, useCallback } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case 'RESPONSE':
      return {
        ...curHttpState,
        loading: false,
        data: action.data,
        extra: action.extra,
      };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return initialState;
    default:
      throw new Error('Should not be reached!');
  }
};

export const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), []);

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifer) => {
      dispatchHttp({ type: 'SEND', identifier: reqIdentifer });
      fetch(url, {
        method,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          dispatchHttp({
            type: 'RESPONSE',
            data,
            extra: reqExtra,
          });
        })
        .catch(() => {
          dispatchHttp({
            type: 'ERROR',
            errorMessage: 'Something went wrong!',
          });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    reqExtra: httpState.extra,
    reqIdentifer: httpState.identifier,
    sendRequest,
    clear,
  };
};
