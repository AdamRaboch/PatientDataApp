

const patientOne = {
    "address_city": "Berkley",
    "address_lines": [
      "237 Hegmann Avenue"
    ],
    "address_state": "MA",
    "date_of_birth": "1981-07-12",
    "email": "Federico@doe.com",
    "family_name": "Aufderhar",
    "gender": "Male",
    "given_name": "Federico",
    "npi": "1234",
    "postal_code": "02779",
    "purpose_of_use": "TREATMENT",
    "ssn": "123-45-6789",
    "telephone": "1-234-567-8910"
  }


  const patientOneDOBError = {
    //   Date_of_birth is in wrong format
    "address_city": "Berkley",
    "address_lines": [
      "237 Hegmann Avenue"
    ],
    "address_state": "MA",
    "date_of_birth": "19810713",
    "email": "Federico@doe.com",
    "family_name": "Aufderhar",
    "gender": "Male",
    "given_name": "Federico",
    "npi": "1234",
    "postal_code": "02779",
    "purpose_of_use": "TREATMENT",
    "ssn": "123-45-6789",
    "telephone": "1-234-567-8910"
  }

  const patientOneEmailError = {
    //   Email is in wrong format
    "address_city": "Berkley",
    "address_lines": [
      "237 Hegmann Avenue"
    ],
    "address_state": "MA",
    "date_of_birth": "19810713",
    "email": "Federicodoe.com",
    "family_name": "Aufderhar",
    "gender": "Male",
    "given_name": "Federico",
    "npi": "1234",
    "postal_code": "02779",
    "purpose_of_use": "TREATMENT",
    "ssn": "123-45-6789",
    "telephone": "1-234-567-8910"
  }

module.exports = {patientOne, patientOneDOBError, patientOneEmailError }