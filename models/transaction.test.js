const { report } = require('./transaction');
const data_1 = require('../example/example_request.json')
const expected_1 = require('../example/example_response.json')
const data_2 = require('../example/test_request.json')
const expected_2 = require('../example/test_response.json')


describe('report', () => {

  it('should return correct data', () => {
    const result = report(data_1);
    expect(result).toEqual(expected_1);
  });

  it('should return correct data', () => {
    console.time('Time')
    const result = report(data_2);
    expect(result).toEqual(expected_2);
    console.timeEnd('Time')
  });

});