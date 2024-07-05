import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Setup a mock server with the provided request handlers.
const server = setupServer(...handlers);

export { server };
