const yup = require('yup')

const schema = yup.object().shape({
  address_city: yup.string().required(),
  address_lines: yup.array().of(yup.string()).required(),
  address_state: yup.string().required(),
  date_of_birth: yup.string().matches(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/).required(),
  email: yup.string().email().required(),
  family_name: yup.string().required(),
  gender: yup.string().oneOf(['Female', 'Male']).required(),
  given_name: yup.string().required(),
  npi: yup.string(),
  postal_code: yup.string().matches(/^\d{5}$/).required(),
  purpose_of_use: yup.string().required(),
  ssn: yup.string().matches(/^\d{3}-?\d{2}-?\d{4}$/).required(),
  telephone: yup.string().matches(/^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/).required()
});


const validateData = async (req, res, next) => {
  try {
    // console.log(req.body)
    const validatedBody = await schema.validate(req.body);
    // console.log(validatedBody)
    req.body = validatedBody;
    next();
  } catch (error) {
    // console.log(error)
    res.status(400).json({
      error
    })
  }
}


module.exports = validateData