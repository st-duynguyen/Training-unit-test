import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import appReducer from '@app/app.reducers';
import appMiddleware from '../../app.middleware';

const store = createStore(appReducer, applyMiddleware(createSagaMiddleware()));
const middleware = createSagaMiddleware();
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: typeof store;
}

export function renderWithProviders(
  ui: React.ReactElement,
  { store = createStore(appReducer, applyMiddleware(middleware)), ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    middleware.run(appMiddleware);
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
