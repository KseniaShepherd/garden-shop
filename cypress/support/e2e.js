import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { mount } from 'cypress/react18';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { MemoryRouter } from 'react-router-dom';

Cypress.Commands.add('mount', (component, options = {}) => {
  // Use the default store if one is not provided
  const {
    routerProps = { initialEntries: ['/'] },
    reduxStore = store,
    ...mountOptions
  } = options;

  const wrapped = (
    <MemoryRouter {...routerProps}>
      <Provider store={reduxStore}>{component}</Provider>
    </MemoryRouter>
  );
  return mount(wrapped, mountOptions);
});
