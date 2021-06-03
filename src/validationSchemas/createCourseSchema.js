const yup = require("yup");

module.exports = yup.object().shape({
  coach_id: yup.string().required,
  text: yup.string().required,
  courseName: yup.string.required,
});
