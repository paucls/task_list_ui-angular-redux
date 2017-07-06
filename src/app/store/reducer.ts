import { IAppState } from './i-app-state';

const initialState: IAppState = {
  tasks: []
};

export function reducer(state = initialState, action) {
  return state;
}
