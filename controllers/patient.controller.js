const fetch = require('node-fetch');
const dotenv = require('dotenv').config();
const baseUrl = 'https://sandbox-dot-particle-health-staging.uc.r.appspot.com';
const headers = {
  "Content-Type": "application/json",
  "Authorization": process.env.API_KEY
}

const addPatient = (req, res) => {
  try {
    const url = `${baseUrl}/api/v1/queries`;
    const data = req.body
    const datain = JSON.stringify(data);
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: datain
      })
      .then(response => response.json())
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(500).send({
          error
        });
      });
  } catch (e) {
    res.status(500).send(e)
  }
}

const getAllPatientQueries = (req, res) => {
  try {
    const url = `${baseUrl}/api/v1/queries/`;
    fetch(url, {
        method: 'GET',
        headers: headers
      })
      .then(response => response.json())
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(500).send({
          error
        });
      });
  } catch (e) {
    res.status(500).send(e)
  }
}

const getPatientQueries = (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        error: "Please enter patient ID."
      })
    }

    const id = req.params.id
    const url = `${baseUrl}/api/v1/queries/${id}`;
    fetch(url, {
        method: 'GET',
        headers: headers
      })
      .then(response => response.json())
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(500).send({
          error
        });
      });
  } catch (e) {
    res.status(500).send(e)
  }
}
module.exports = {
  addPatient,
  getAllPatientQueries,
  getPatientQueries
}