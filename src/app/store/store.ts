import { environment } from '../../environments/environment';
import { createStore, compose, GenericStoreEnhancer } from 'redux';
import { rootReducer } from './root-reducer';

const devToolsExtension: GenericStoreEnhancer = window['devToolsExtension'] ?
  window['devToolsExtension']() : (f) => f;

let enhancer: GenericStoreEnhancer;

if (!environment.production) {
  enhancer = compose(devToolsExtension) as GenericStoreEnhancer;
}

export const store = createStore<any>(rootReducer, enhancer);
