import { describe, it } from 'mocha'
import supertest from 'supertest'
import server from '../server.js'
//import assert from 'assert'

describe('Get /users', function() {

  const request = supertest(server);

  it('GET /users => StatusCode:200 and []', function(done) {
    request
      .get('/users')
      .expect(200, done)
      .expect([]);
  });


  it('should create new user and return 201', function(done) {
    const newUser = {
       login: 'Test User',
       password: 'pass',
       age: '13'
    };

    request
      .post('/users')
      .send({newUser})
      .expect(201, done);
  });

});