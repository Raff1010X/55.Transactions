const { report } = require('../models/transaction');
const data_1 = require('../example/example_request.json')
const expected_1 = require('../example/example_response.json')
const data_2 = require('./test_request.json')
const expected_2 = require('./test_response.json')
const request = require('supertest');
const app = require('../app')


describe('report', () => {

  it('should return correct data', () => {
    const result = report(data_1);
    expect(result).toEqual(expected_1);
  });

  it('should return correct 99999 data', () => {
    const result = report(data_2);
    expect(result).toEqual(expected_2);
  });

});

describe('GET /test request', function() {
  it('responds with: Server is ready to answer Your requests.', async function() {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Server is ready to answer Your requests.')
  });
});

describe('POST /test request', function() {
  it('responds with correct data', async function() {
    const response = await request(app).post('/transactions/report').send(data_1)
    expect(response.status).toEqual(200)
    // expect(response.text).toEqual(JSON.stringify(expected_1))
    expect(response.body).toEqual(expected_1)
  });
});

describe('POST /test 99999 request', function() {
  it('responds with correct data', async function() {
    const response = await request(app).post('/transactions/report').send(data_2)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(expected_2)
  });
});