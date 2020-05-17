const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const time = require('./util/time');
const sinon = require('sinon');
sinon.stub(time, 'setTimeout');

describe('Server API tests', function() {

  it('gets the hosts API and JSON response', async done => {
    const response = await request.get('/hosts');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(100);
    expect(response.body[0].name).toBe('Graziella');
    expect(response.body[0].id).toBe(1);
    done();
  });

  it('gets the data based on hosts ID', async done => {
    const response = await request.get('/hosts/4');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].id).toEqual(4);
    expect(response.body[0].name).toEqual("Kathy & Craig");
    done();
  });

  it('sends an HTML in response to endpoint with listing ID', async done => {
    const response = await request.get('/1077');
    expect(response.status).toBe(200);
    done();
  });

  it('returns host data based on listing ID parsed from the URL and listing service API', async done => {
    const response = await request.get('/listings/1003/hosts');
    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(3);
    expect(response.body.name).toEqual("Tribe");
    done();
  });
  
});


