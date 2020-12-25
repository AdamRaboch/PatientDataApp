const app = require('../app');
const supertest = require('supertest');
const request = supertest(app)

const { patientOne, patientOneDOBError, patientOneEmailError} = require('./testpatients');


describe('POST /patient  add a patient successfully to API', () => {
    it('responds with json', async () => {
       const apiResponse = await request
        .post('/patient')
        .send(patientOne)
        .set('Content-Type', 'application/json');
        expect(200).toBe(apiResponse.status)
        expect(apiResponse.body.id).toBeTruthy()
    });
  });

describe('POST /patient  unsuccessfully add patient to API; should return error', () => {
    it('responds with error status 400', async () => {
        const apiResponse = await request
        .post('/patient')
        .send(patientOneDOBError)
        .set('Content-Type', 'application/json');
        expect(400).toBe(apiResponse.status)
        expect(apiResponse.body.error.path).toEqual('date_of_birth')
    })
})  

describe('POST /patient  unsuccessfully add patient to API; should return error', () => {
    it('responds with error status 400', async () => {
        const apiResponse = await request
        .post('/patient')
        .send(patientOneEmailError)
        .set('Content-Type', 'application/json');
        expect(400).toBe(apiResponse.status)
        expect(apiResponse.body.error.path).toEqual('email')
    })
})  

describe('GET /allpatientqueries successfully returns all queried patient objects',() => {
    it('responds with 200 and body.queries is an array', async () => {
        const apiResponse = await request
        .get('/allPatientQueries')
        .set('Content-Type', 'application.json');
        expect(200).toBe(apiResponse.status)
        expect(apiResponse.body.queries).toBeDefined()
    })
})

describe('GET /patientqueries successfully returns all queries for single patient', () => {
    it('responds with 200 and body.files is an array', async () => {
        const patientId = 'a325e3d4-b8a3-4b40-9a59-917c2a3fb819'
        const apiResponse = await request
        .get(`/patientqueries/${patientId}`)
        .set('Content-Type', 'application/json');
        expect(200).toBe(apiResponse.status)
        expect(apiResponse.body.files).toBeDefined()
    })
})

describe('GET /patientqueries unsuccessfully returns all queries for single patient', () => {
    it('responds with 404', async () => {
        const patientId = ''
        const apiResponse = await request
        .get(`/patientqueries/${patientId}`)
        .set('Content-Type', 'application/json');
        expect(404).toBe(apiResponse.status)
        })
})

describe('GET /patientqueries unsuccessfully returns all queries for single patient', () => {
    it('responds with 200 and error message', async () => {
        const patientId = 'xxxx'
        const apiResponse = await request
        .get(`/patientqueries/${patientId}`)
        .set('Content-Type', 'application/json');
        expect(200).toBe(apiResponse.status)
        expect(apiResponse.body.message).toEqual("bad id specified")
        })
})