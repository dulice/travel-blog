
//MIDDLEWARE
export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('user', JSON.stringify(getState()));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem('user') !== null) {
    return JSON.parse(localStorage.getItem('user')); // re-hydrate the store
  }
};
