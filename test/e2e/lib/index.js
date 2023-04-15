import supertest from 'supertest';
import routes from './routes';

const host =
  process.env.SERVER_PORT
    ? `localhost:${process.env.SERVER_PORT}`
    : 'localhost:4000';

const request = supertest(host);

export default { request, routes };