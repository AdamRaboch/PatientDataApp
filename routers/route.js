const express = require('express');
const router = express.Router();
const {
    addPatient,
    getAllPatientQueries,
    getPatientQueries
} = require('../controllers/patient.controller');
const validateData = require('../middleware/validation');

router.post('/patient', validateData, addPatient);

router.get('/allpatientqueries', getAllPatientQueries);

router.get('/patientqueries/:id', getPatientQueries);

module.exports = router;